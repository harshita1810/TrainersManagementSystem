import React, { useEffect, useState } from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BasicExample from './BasicExample';
import Reshab from '../assets/Reshab.jpeg'
import Amrit from '../assets/Amrit.jpeg'
import Ashok from '../assets/Ashok.jpeg'
import Madhu from '../assets/Madhu.jpeg'
import Vidhu from '../assets/Vidhu.jpeg'
import Shweta from '../assets/Shweta.jpeg'
import Raj from '../assets/Raj.jpeg'

function Cards() {
    const [trainers, setTrainers] = useState([]);

    const navigate = useNavigate();
    
    const ig = () => {
        navigate('/trainerlist')
    }

    const ig1 = () => {
      navigate('/trainerlist1')
    }

    const ig2 = () => {
      navigate('/trainerlist2')
    }

    const ig3 = () => {
      navigate('/trainerlist3')
    }

    const ig4 = () => {
      navigate('/trainerlist4')
    }

    const ig5 = () => {
      navigate('/trainerlist5')
    }

    const ig6 = () => {
      navigate('/trainerlist6')
    }

    const data = [
      {
        name: 'Reshab Kumar',
        Rating: 4.9,
      },
      {
        name: 'Amrit Singh',
        Rating: 4,
      },
      {
        name: 'Shweta Lamba',
        Rating: 4.1,
      },
      {
        name: 'Ashok K Chitkara',
        Rating: 4.5,
      },
      {
        name: 'Madhu Chitkara',
        Rating: 3.8,
      },
      {
        name: 'Vidhu Baggan',
        Rating: 4.3,
      },
      {
        name: 'Raj Gaurang',
        Rating: 3.5,
      },
    ];

    const [chartData, setChartData] = useState(data);
    const [chartLabel, setChartLabel] = useState('Weekly-Rating');
    const [selectedOption, setSelectedOption] = useState('1');
    const [barColor, setBarColor] = useState('#427D9D');
  
    const handleDropdownSelect = (eventKey) => {
      if (eventKey === '1') {
        // User clicked "Weekly"
        setChartData(data);
        setChartLabel('Weekly-Rating'); 
        setBarColor('#427D9D');// Set the chart data to the original data
      } else if (eventKey === '2') {
        // User clicked "Monthly"
        // Replace this with the monthly data you want to display
        setChartLabel('Monthly-Rating');
        setBarColor('#4DB4D7');
        const monthlyData = [
          {
            name: 'Reshab Kumar',
            Rating: 5,
          },
          {
            name: 'Amrit Singh',
            Rating: 4.3,
          },
          {
            name: 'Shweta Lamba',
            Rating: 4.5,
          },
          {
            name: 'Ashok K Chitkara',
            Rating: 4.7,
          },
          {
            name: 'Madhu Chitkara',
            Rating: 4.1,
          },
          {
            name: 'Vidhu Baggan',
            Rating: 4.6,
          },
          {
            name: 'Raj Gaurang',
            Rating: 4.1,
          },
          
          // Add more data here...
        ];
        setChartData(monthlyData);
      }
    }

    useEffect(() => {
      const trainersData = JSON.parse(localStorage.getItem('trainers'));
      setTrainers(trainersData || []);
    }, [])   

  return (
    <>
    <BasicExample />
    <div className='outer'>
    <div className='wrapper'>
                <div className='item' onClick={ig}>
        <img src={Reshab}
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Reshab Kumar</b></p>
            <p><b>Designation: FEE Trainer</b></p>
        </div>
        <div className='item' onClick={ig1}>
        <img  src={Amrit}
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Amrit Singh</b></p>
            <p><b>Designation: PA Trainer</b></p>
        </div>
        <div className='item' onClick={ig2}>
        <img  src={Shweta}
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Shweta Lamba</b></p>
            <p><b>Designation: C++ Trainer</b></p>
        </div> 
        <div className='item' onClick={ig3}>
        <img  src={Ashok}
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Ashok K Chitkara</b></p>
            <p><b>Designation: Chancellor</b></p>
        </div>
        <div className='item' onClick={ig4}>
        <img  src={Madhu}
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Madhu Chitkara</b></p>
            <p><b>Designation: Chancellor2</b></p>
        </div>
        <div className='item' onClick={ig5}>
        <img  src={Vidhu}
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Vidhu Baggan</b></p>
            <p><b>Designation: CN Trainer</b></p>
        </div>
        <div className='item' onClick={ig6}>
        <img  src={Raj}
              width="100"
              height="100"
              className="image1"
              alt="React Bootstrap logo"
            />
            <p></p>
            <p><b>Name: Raj Gaurang</b></p>
            <p><b>Designation: Dean</b></p>
        </div> 
        {
  trainers.map(t => {
    return (
      <div className='item' key={t.id}>
        <img
          src={t.file}
          width="100"
          height="100"
          className="image1"
          alt="Trainer Image"
        />
        <p></p>
        <p><b>Name: {t.fullName} </b></p>
        <p><b>Designation: {t.designation}</b></p>
      </div>
    );
  })
}


    </div>
    <div>
    <DropDown onSelect={handleDropdownSelect} selectedOption={selectedOption} />
    <div className='barchart'>
    <BarChart
                width={1300}
                height={400}
                data={chartData}
                margin={{
                  top: 10,
                  right: 70,
                  left: 20,
                  bottom: 50,
                }}
                barSize={40}
                
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 60, right: 60 }} />
                <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="Rating" fill={barColor} background={{ fill: '#eee' }} name={chartLabel} />
              </BarChart>
              
              </div>
              
    </div>
    </div>
    {/* <Create /> */}
    </>
  );
}

export default Cards;