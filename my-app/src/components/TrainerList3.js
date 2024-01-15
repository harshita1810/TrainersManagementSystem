import React from 'react';
import './TrainerList.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import BasicExample from './BasicExample';
import Ashok from '../assets/Ashok.jpeg'

const TrainerList = () => {
    const data = [
        { name: 'Group 23', value: 400 },
        { name: 'Group 22', value: 300 },
        { name: 'Group 1', value: 300 },
        { name: 'Group 2', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
                <title>{data[index].name}</title>
            </text>
        );
    };

    return (
        <>
        <BasicExample/>
        <div className='outerdivision'>
            <div className='innerdiv'>
                <img
                    src={Ashok}
                    width="200"
                    height="200"
                    className="image"
                    alt="React Bootstrap logo"
                />
                <p></p>
                <p><b>Name: </b>Ashok K Chitkara</p>
                <p><b>Age: </b>43</p>
                <p><b>Designation: </b>Chancellor</p>
                <p><b>Specialization: </b>Java, JavaScript, HTML, ReactJs, NodeJs, Python, Mathematics</p>
                <p><b>Class: </b>All</p>
            </div>
            <div className='innerdivision'>
            <h2 className='paragraph'><b>Ranking According to Classes</b></h2>
                <div className='piechart'>
                    <ResponsiveContainer width={400} height={400}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx={200}
                                cy={150}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default TrainerList;