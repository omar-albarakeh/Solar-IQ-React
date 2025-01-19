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

  

  return (
    <div className="update-item-form-container">
      
    </div>
  );
};

export default UpdateItemForm;