import React from 'react';
import { useForm } from 'react-hook-form';
import { createItem } from './itemsService';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';


const CreateItem = () => {
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
    </form>
  );
};

export default CreateItem;
