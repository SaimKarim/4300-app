import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; 
import './WorkoutHistory.css';

const WorkoutHistory = () => {
  // Dummy data for the workouts
  const workouts = [
    { date: '2024-04-03', duration: 30 },
    { date: '2024-04-05', duration: 45 },
    { date: '2024-04-07', duration: 60 },
  ];

  // Calculate total duration for the chart
  const totalDuration = workouts.reduce((acc, workout) => acc + workout.duration, 0);
  const percentageGoalMet = Math.min((totalDuration / 150) * 100, 100).toFixed(2);

  // Chart data
  const chartData = {
    datasets: [{
      data: [totalDuration, 150 - totalDuration],
      backgroundColor: ['#4CAF50', '#FF6384'],
      hoverOffset: 4,
      borderRadius: 20,
      spacing: 10,
    }],
    labels: ['Minutes Done', 'Minutes Left'],
  };

  // Chart options
  const chartOptions = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      }
    },
    cutout: '80%',
    circumference: 180,
    rotation: 270,
  };

  return (
    <div className="workout-history-container">
      <h2>Your Walk History</h2>
      <div className="workout-cards-container">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-card">
            <p>Date: {workout.date}</p>
            <p>Duration: {workout.duration} minutes</p>
          </div>
        ))}
      </div>
      <div className="chart-container">
        <Doughnut data={chartData} options={chartOptions} />
        <div className="chart-center-label">
          {percentageGoalMet}% Goal Met
        </div>
      </div>
    </div>
  );
};

export default WorkoutHistory;
