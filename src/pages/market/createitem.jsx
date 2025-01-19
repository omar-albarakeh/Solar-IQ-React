import React from 'react';
import { useForm } from 'react-hook-form';
import { createItem } from '../../services/marketservice';
import { useNavigate } from 'react-router-dom';

const CreateItem = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createItem(data);
    navigate('/create-item');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="create-item-form">
      <input {...register('name')} placeholder="Name" required />
      <input {...register('price')} placeholder="Price" type="number" required />
      <input {...register('category')} placeholder="Category" required />
      <input {...register('capacity')} placeholder="Capacity" type="number" required />
      <input {...register('description')} placeholder="Description" />
      <input {...register('imageUrl')} placeholder="Image URL" />
      <input {...register('quantity')} placeholder="Quantity" type="number" required />
      <button type="submit">Create Item</button>
    </form>
  );
};

export default CreateItem;