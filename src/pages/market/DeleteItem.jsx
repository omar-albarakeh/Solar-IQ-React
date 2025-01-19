import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems, deleteItem } from '../../services/marketservice'; 
import '../../style/deleteitem.css';

const DeleteItem = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

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

  const handleDeleteClick = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedItemId) {
      setDeleting(true);
      try {
        await deleteItem(selectedItemId);
        fetchItems(); 
        alert('Item deleted successfully!');
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item. Please try again.');
      } finally {
        setDeleting(false);
        setShowModal(false);
        setSelectedItemId(null);
      }
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedItemId(null);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="delete-item-container">
      <h2>Delete Items</h2>
      <button onClick={() => navigate('/market-panel')} className="back-button">
        Back to Market Panel
      </button>

      <div className="items-list">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Category: {item.category}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => handleDeleteClick(item.id)}
                className="delete-button"
                disabled={deleting}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this item?</p>
            <button onClick={handleConfirmDelete} disabled={deleting}>
              {deleting ? 'Deleting...' : 'Yes, Delete'}
            </button>
            <button onClick={handleCancelDelete} disabled={deleting}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteItem;