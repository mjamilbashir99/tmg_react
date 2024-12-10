import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State/index';

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state) => state.amount);

  // Function to handle withdrawal while ensuring balance doesn't go below zero
  const handleWithdraw = (amountToWithdraw) => {
    if (amount - amountToWithdraw >= 0) {
      withdrawMoney(amountToWithdraw);
    } else {
      alert('Insufficient balance!');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '400px',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Adidas Shoes</h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
          Comfortable and stylish shoes for every occasion.
        </p>

        {/* Amount Display */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#4CAF50',
            marginBottom: '30px',
          }}
        >
          Cart Balance: ${amount}
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            className="btn"
            onClick={() => handleWithdraw(100)}
            style={{
              flex: '1',
              marginRight: '10px',
              padding: '10px 20px',
              backgroundColor: '#FF6B6B',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Remove $100
          </button>

          <button
            className="btn"
            onClick={() => depositMoney(100)}
            style={{
              flex: '1',
              marginLeft: '10px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Add $100
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
