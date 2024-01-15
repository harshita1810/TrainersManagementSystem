import React from 'react';
import { Bar } from 'react-chartjs-2';

function RankingChart(){
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Ranking',
            data: [10, 15, 12, 20, 18, 25, 22], // Replace with your ranking values
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      return (
        <div className="App">
          <h1>Weekly Rankings</h1>
          <div className="chart-container">
            <Bar
              data={data}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Ranking',
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      );
};

export default RankingChart;
