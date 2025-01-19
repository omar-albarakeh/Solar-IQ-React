import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getItemById, updateItem } from "../../services/marketservice";

const UpdateItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: '',
    price: 0,
    capacity: 0,
    category: '',
    description: '',
    imageUrl: '',
    quantity: 0,
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getItemById(id);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateItem(id, item);
      navigate('/items'); 
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="update-item-form-container">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={item.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={item.price} onChange={handleChange} />
        </label>
        <label>
          Capacity:
          <input type="number" name="capacity" value={item.capacity} onChange={handleChange} />
        </label>
        
      </form>
    </div>
  );
};

export default UpdateItemForm;