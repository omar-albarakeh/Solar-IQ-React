import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/marketpanel.css';

const MarketPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="market-panel-container">
      <h2 className="market-panel-title">Market Panel</h2>
      <div className="market-panel-buttons">
        <button className="market-panel-button create-button" onClick={() => navigate('/create-item')}>Create Item</button>
        <button className="market-panel-button update-button" onClick={() => navigate('/update-item')}>Update Item</button>
        <button className="market-panel-button delete-button" onClick={() => navigate('/delete-item')}>Delete Item</button>
      </div>
    </div>
  );
};

export default MarketPanel;