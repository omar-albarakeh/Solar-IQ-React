import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/marketpanel.css';

const MarketPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="market-panel-container">
      <h2>Market Panel</h2>
      <div className="market-panel-buttons">
        <button onClick={() => navigate('/create-item')}>Create Item</button>
        <button onClick={() => navigate('/update-item')}>Update Item</button>
        <button onClick={() => navigate('/delete-item')}>Delete Item</button>
      </div>
    </div>
  );
};

export default MarketPanel;
