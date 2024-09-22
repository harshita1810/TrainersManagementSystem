const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const TrainerModel = require('./models/Trainer');
const ContactModel = require('./models/Contact');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.bny17md.mongodb.net/tms?retryWrites=true&w=majority");

let temporaryUserData = {};
let temporaryUserDataContact = {}; // Temporary storage for user data

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await TrainerModel.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ error: 'This email is already registered. Please use a different email.' });
    }

    const generatedOTP = generateOTP();
    sendOTPToEmail(email, generatedOTP);
    temporaryUserData = { name, email, password, otp: generatedOTP };

    res.status(200).json({ message: 'OTP sent to your email for verification.' });
});

app.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (temporaryUserData.email === email && temporaryUserData.otp === otp) {
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
    const { email, password } = req.body;
    TrainerModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("server is running");
});

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOTPToEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'OTP for Registration',
        text: `Your OTP for registration is: ${otp}. Don't share your OTP with anyone.`,
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
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Thank you for contacting',
        text: `Your OTP is: ${otp}. Don't share your OTP with anyone.`,
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
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: userEmail,
        to: process.env.EMAIL,
        subject: 'New Contact Request',
        text: `You have a new contact request from ${userEmail} with the following message:\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Contact email sent to yourself: ' + info.response);
            sendAcknowledgmentEmail(userEmail);
        }
    });
}

function sendAcknowledgmentEmail(userEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: 'Thank you for contacting us',
        text: 'Thank you for contacting us. Your query will be resolved within 1 week. Please be patient until then.\n\nThis is an autogenerated email, please do not reply.',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Acknowledgment email sent to the user: ' + info.response);
        }
    });
}

app.post('/verify-otp-contact', async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (temporaryUserDataContact.email === email && temporaryUserDataContact.otp === otp) {
            await ContactModel.create(temporaryUserDataContact);
            sendContactEmailToYourself(email, temporaryUserDataContact.message);
            res.status(201).json({ message: 'OTP verification successful. Your message has been sent successfully.' });
        } else {
            return res.status(401).json({ error: 'Invalid OTP.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during OTP verification.' });
    }
});
