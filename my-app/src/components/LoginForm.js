import React, {useState} from 'react';
import './LoginForm.css';
import BasicExample from './BasicExample';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [classOpted, setClassOpted] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };


  function addTrainer(event) {
    event.preventDefault();
  
    // Assuming file is an image file selected by the user
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];
  
    // Convert the image file to a data URL or base64 string
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = {
        fullName,
        designation,
        specialization,
        age,
        classOpted,
        file: e.target.result  // Store the result of FileReader as the image data
      };
  
      console.log(data);
  
      let trainers = localStorage.getItem('trainers');
      console.log('Data retrieved from local storage:', trainers);
  
      trainers = trainers ? JSON.parse(trainers) : [];
      trainers.push(data);
      localStorage.setItem('trainers', JSON.stringify(trainers));
      navigate('/cards')
    };
  
    reader.readAsDataURL(file);
    
  }

 
  
  return (
    <>
    <BasicExample />
    <div className='outerdivisionn'>
      <div className='teacher'>
        <h2 className='headingteacher'>Add <span>Trainer</span> Details</h2>
        <br></br>
        <form className='details' onSubmit={addTrainer}>
        <div>
          <input name='fullName' onChange={e => setFullName(e.target.value)} type='text' placeholder='Full Name'/>
          
          <input name='age' onChange={e => setAge(e.target.value)} type='number' min="10" placeholder='Age'/>
        </div>
          <br></br>
        <div>
          <input name='designation' onChange={e => setDesignation(e.target.value)} type='text' placeholder='Designation'/>
          
          <input name='specialization' onChange={e => setSpecialization(e.target.value)} type='text' placeholder='Specialization'/>
        </div>
        {/* <div>
      <input type="file" value={inputValue} onChange={handleFileChange} />
      <p>Input Value: {inputValue}</p>
    </div> */}
    <div className='trainerimage'>
              <label htmlFor='image'>Upload Image:</label>
              <input
                type='file'
                id='image'
                accept='image/*'
                onChange={handleFileChange}
              />
            </div>
          <br></br>
          <div>
            <select onChange={e => setClassOpted(e.target.value)} className='boxarea'> 
              <option hidden>Class Opted</option>
              <option value="G1" type='checkbox'>G1</option> 
              <option value="G2" type='checkbox'>G2</option> 
              <option value="G3" type='checkbox'>G3</option> 
              <option value="G4" type='checkbox'>G4</option>
              <option value="G5" type='checkbox'>G5</option> 
              <option value="G6" type='checkbox'>G6</option> 
              <option value="G7" type='checkbox'>G7</option> 
              <option value="G8" type='checkbox'>G8</option> 
              <option value="G9" type='checkbox'>G9</option> 
              <option value="G10" type='checkbox'>G10</option> 
              <option value="G11" type='checkbox'>G11</option> 
              <option value="G12" type='checkbox'>G12</option> 
              <option value="G13" type='checkbox'>G13</option> 
              <option value="G14" type='checkbox'>G14</option> 
              <option value="G15" type='checkbox'>G15</option> 
              <option value="G16" type='checkbox'>G16</option>
              <option value="G17" type='checkbox'>G17</option> 
              <option value="G18" type='checkbox'>G18</option> 
              <option value="G19" type='checkbox'>G19</option> 
              <option value="G20" type='checkbox'>G20</option>
              <option value="G21" type='checkbox'>G21</option> 
              <option value="G22" type='checkbox'>G22</option> 
              <option value="G23" type='checkbox'>G23</option> 
              <option value="G24" type='checkbox'>G24</option> 
              <option value="G25" type='checkbox'>G25</option> 
              <option value="G26" type='checkbox'>G26</option> 
              <option value="G27" type='checkbox'>G27</option> 
              <option value="G28" type='checkbox'>G28</option> 
              <option value="G29" type='checkbox'>G29</option> 
              <option value="G30" type='checkbox'>G30</option> 
              <option value="G31" type='checkbox'>G31</option> 
              <option value="G32" type='checkbox'>G32</option>  
            </select>
          </div>
          <br></br>
          <button className='addbutton' type='submit' >Add</button>
          {/* <button onClick={addu} className='addbutton'>Go to dashboad</button> */}

        </form>
        <br></br>
      </div>
    </div>
    </>
  );
};

export default LoginForm;