import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems } from "../../services/marketservice";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems();
        setItems(response.data.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-list-container">
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item-list-item">
            <span>{item.name}</span>
            <button onClick={() => navigate(`/update-item/${item.id}`)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;