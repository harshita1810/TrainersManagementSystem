const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const TrainerModel = require('./models/Trainer')
const nodemailer = require('nodemailer')
const ContactModel = require('./models/Contact')

const app = express()
app.use(express.json())
// app.use(cors())
app.use(cors(
    {
        origin:["https://trainers-management-system-qdsr.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
))

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.bny17md.mongodb.net/tms?retryWrites=true&w=majority");
let temporaryUserData = {};
let temporaryUserDataContact = {}; // Temporary storage for user data

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if email already exists in the database
    const existingUser = await TrainerModel.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ error: 'This email is already registered. Please use a different email.' });
    }

    // Continue with the registration process if the email is not in use
    const generatedOTP = generateOTP();
    sendOTPToEmail(email, generatedOTP);
    temporaryUserData = { name, email, password, otp: generatedOTP };

    res.status(200).json({ message: 'OTP sent to your email for verification.' });
});

app.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Check if the provided OTP matches the stored OTP
        if (temporaryUserData.email === email && temporaryUserData.otp === otp) {
            // Save user data to MongoDB
            const newUser = await TrainerModel.create(temporaryUserData);
            res.status(201).json({ message: 'OTP verification successful. You can now log in.' });
        } else {
            return res.status(401).json({ error: 'Invalid OTP.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during OTP verification.' });
    }
});

app.post('/login', (req, res) => {
    const {email, password} = req.body
    TrainerModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record exists")
        }
    })
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running");
})



function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOTPToEmail(email, otp) {
    // Use nodemailer or any other email sending service to send OTP
    // Example using nodemailer:
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harshita0583.be21@chitkara.edu.in',
            pass: 'Harshita2003',
        },
    });

    const mailOptions = {
        from: 'harshita0583.be21@chitkara.edu.in',
        to: email,
        subject: 'OTP for Registration',
        text: `Your OTP for registration is: ${otp} Don't share your OTP with anyone`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



app.post('/register-contact', async (req, res) => {
    const { name, email, phoneNo, emailSubject, message } = req.body;

    const generatedOTP = generateOTP();
    sendOTPToEmailContact(email, generatedOTP);
    temporaryUserDataContact = { name, email, phoneNo, emailSubject, message, otp: generatedOTP };

    res.status(200).json({ message: 'OTP sent to your email for verification.' });
});



function sendOTPToEmailContact(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harshita0583.be21@chitkara.edu.in',
            pass: 'Harshita2003',
        },
    });

    const mailOptions = {
        from: 'harshita0583.be21@chitkara.edu.in',
        to: email,
        subject: 'Thankyou for contacting',
        text: `Your OTP is: ${otp} Don't share your OTP with anyone`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function sendContactEmailToYourself(userEmail, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harshita0583.be21@chitkara.edu.in',
            pass: 'Harshita2003',
        },
    });

    const mailOptions = {
        from: userEmail,  // Use the user's email as the sender
        to: 'harshita0583.be21@chitkara.edu.in',
        subject: 'New Contact Request',
        text: `You have a new contact request from ${userEmail} with the following message:\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Contact email sent to yourself: ' + info.response);
            // After sending email to yourself, send acknowledgment email to the user
            sendAcknowledgmentEmail(userEmail);
        }
    });
}

// Function to send acknowledgment email to the user
function sendAcknowledgmentEmail(userEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harshita0583.be21@chitkara.edu.in',
            pass: 'Harshita2003',
        },
    });

    const mailOptions = {
        from: 'harshita0583.be21@chitkara.edu.in',
        to: userEmail,
        subject: 'Thank you for contacting us',
        text: 'Thank you for contacting us. Your qwery will be solved within 1 week. I would like to request you to keep patience till then.\n\n We will get back to you as soon as possible.\n\n\n\nDo not reply to this mail as this mail is autogenerated',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Acknowledgment email sent to the user: ' + info.response);
        }
    });
}


// Rest of the OTP verification logic remains the same
app.post('/verify-otp-contact', async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (temporaryUserDataContact.email === email && temporaryUserDataContact.otp === otp) {
            // Save user data to MongoDB
            await ContactModel.create(temporaryUserDataContact);
            sendContactEmailToYourself(email, temporaryUserDataContact.message);
            res.status(201).json({ message: 'OTP verification successful. Your message has been sent successfully' });
        } else {
            return res.status(401).json({ error: 'Invalid OTP.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during OTP verification.' });
    }
}); 