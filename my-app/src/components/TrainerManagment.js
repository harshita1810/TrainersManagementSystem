import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Cards from './Cards';

const TrainerManagement = () => {
  const [trainerDetails, setTrainerDetails] = useState([]);

  const addTrainer = (newTrainer) => {
    setTrainerDetails([...trainerDetails, newTrainer]);
  };

  return (
    <div>
      <LoginForm onAddTrainer={addTrainer} />
      <Cards trainers={trainerDetails} />
    </div>
  );
};

export default TrainerManagement;
