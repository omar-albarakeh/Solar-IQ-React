import React from 'react';
import { useForm } from 'react-hook-form';
import { createItem } from './itemsService';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';


const CreateItem = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createItem(data);
    navigate('/create-item');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
    </form>
  );
};

export default CreateItem;
