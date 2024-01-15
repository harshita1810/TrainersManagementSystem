import Card from 'react-bootstrap/Card';
import { AiOutlineApartment } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { DiSnapSvg } from "react-icons/di";
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DashBoard.css';
import DshDrop from './DshDrop';
import React, { useState } from 'react';
import BasicExample from './BasicExample';

function DashBoard() {
  
    const navigate = useNavigate();
    const data = [
      {
        name: 'BE CSE',
        Rating: 4200,
      },
      {
        name: 'MBA',
        Rating: 3800,
      },
      {
        name: 'BBA',
        Rating: 3000,
      },
      {
        name: 'D Phrama',
        Rating: 3500,
      },
      {
        name: 'B.Com',
        Rating: 3100,
      },
      {
        name: 'M.Com',
        Rating: 2800,
      },
      {
        name: 'HM',
        Rating: 4100,
      },
    ];
    const branchColors = {
      'BE CSE': 'red',
      'MBA': 'purple',
      'BBA': 'blue',
      'D Phrama': 'green',
      'B.Com': 'orange',
      'M.Com': 'teal',
      'HM': 'pink',
    };
    const [chartData, setChartData] = useState(data);
    const [chartLabel, setChartLabel] = useState('Total-Students(2022)');
    const [selected, setSelected] = useState('1');
    // const [barColor, setBarColor] = useState('#427D9D');
    const [barColor, setBarColor] = useState('#427D9D');
    const nav = () => {
        navigate('/cards')
    }

  const comp = () => {
    navigate('/companies')
  }

    const counter = () => {
      navigate('/counter')
  }

    const handleDropdownSelect = (eventKey) => {
      if (eventKey === '1') {
        setChartData(data);
        setBarColor('#427D9D');
        setChartLabel('Total-Students(2022)'); 
      } else if (eventKey === '2') {
        setBarColor('#4DB4D7');
        setChartLabel('Total-Students(2023)'); 
        const monthlyData = [
          {
            name: 'BE CSE',
            Rating: 4400,
          },
          {
            name: 'MBA',
            Rating: 4000,
          },
          {
            name: 'BBA',
            Rating: 2800,
          },
          {
            name: 'D Phrama',
            Rating: 3700,
          },
          {
            name: 'B.Com',
            Rating: 3200,
          },
          {
            name: 'M.Com',
            Rating: 2700,
          },
          {
            name: 'HM',
            Rating: 4000,
          },
        ];
        setChartData(monthlyData);
      }
    }

  return (
    <>
  <BasicExample />
    <div  className='cards'>
      <Card border="primary" style={{ width: '20rem' , height: '5rem' }} className='field bar' variant="outline-success" onClick={nav}>
 
        <Card.Body className='fiel'>
          <Card.Title> <AiOutlineApartment/> 23</Card.Title>
          <Card.Text>
            Trainers
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: '20rem' , height: '5rem' }} className='field bar' variant="outline-success" onClick={comp}>
  
        <Card.Body className='fiel'>
          <Card.Title> <AiOutlineUsergroupAdd/> 34</Card.Title>
          <Card.Text>
          Companies
          </Card.Text>
        </Card.Body>
      </Card>

      {/* <Card border="success" style={{ width: '15rem' , height: '5rem' }} className='field bar' variant="outline-success">
        
        <Card.Body className='fiel'>
          <Card.Title> <BsPersonCircle/> 10567</Card.Title>
          <Card.Text>
            Students
          </Card.Text>
        </Card.Body>
      </Card> */}

      <Card border="danger" style={{ width: '20rem' , height: '5rem' }} className='field bar' variant="outline-success" onClick={counter}>
       
        <Card.Body className='fiel'>
          <Card.Title> <DiSnapSvg/> </Card.Title>
          <Card.Text>
            Contact Us
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <DshDrop onSelect={handleDropdownSelect} selected={selected} />
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
                <YAxis domain={[1000, 5000]} ticks={[0, 1000, 2000, 3000, 4000, 5000]} />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                {/* {chartData.map((entry, index) => ( */}
                <Bar dataKey="Rating" fill={barColor} background={{ fill: '#eee' }} name={chartLabel} />
              </BarChart>
              </div>
    </>
  );
}

export default DashBoard;