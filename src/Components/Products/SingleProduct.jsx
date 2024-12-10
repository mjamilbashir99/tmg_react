// SingleProduct.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {
  const { id } = useParams();
  const [cartCount, setCartCount] = useState(0);
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  const products = [
    {
      id: 1,
      name: 'Electric Scooter',
      description: 'Eco-friendly electric scooter with high speed and long battery life.',
      price: '$799.99',
      image: 'https://media.istockphoto.com/id/1688638847/photo/senior-man-changing-battery-on-electric-bicycle.webp?a=1&b=1&s=612x612&w=0&k=20&c=lsQlS5eM4f62cvO75CocgAukLJIHiiCb5yXjt27DqZ0=', 
    },
    {
      id: 2,
      name: 'Electric Bike',
      description: 'Stylish electric bike for a smooth and fast ride.',
      price: '$1200.00',
      image: 'https://media.istockphoto.com/id/1688638847/photo/senior-man-changing-battery-on-electric-bicycle.webp?a=1&b=1&s=612x612&w=0&k=20&c=lsQlS5eM4f62cvO75CocgAukLJIHiiCb5yXjt27DqZ0=', 
    },
    {
      id: 3,
      name: 'Portable Charger',
      description: 'Compact and powerful charger for all your devices on the go.',
      price: '$49.99',
      image: 'https://media.istockphoto.com/id/2106195679/photo/female-hand-holding-phone-with-red-discharged-battery-on-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=riYoCD4YiPOSrddunfEhL7jQOB6lh8zQpxa40K9mzBI=', 
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Track your health and stay connected with this sleek smartwatch.',
      price: '$199.99',
      image: 'https://plus.unsplash.com/premium_photo-1682339539425-7380649a0864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnR3YXRjaCUyMGltYWdlfGVufDB8fDB8fHww', 
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  const handleQuantityChange = (e) => {
    let value = parseInt(e.target.value);
    if (value < 1) value = 1;
    if (value > 10) value = 10;
    setQuantity(value);
  };

  const addToCart = () => {
    setCartCount(cartCount + quantity); // Add the selected quantity to the cart
    alert(`Added ${quantity} item(s) to the cart!`);
  };

  return (
    <div className="single-product">
      <div className="product-container">
        <div className="product-image">
          <img src={product?.image} alt={product?.name} />
        </div>
        <div className="product-details">
          <h1>{product?.name}</h1>
          <p className="description">{product?.description}</p>
          <p className="price">{product?.price}</p>
          
          {/* Quantity Field */}
          <div className="quantity-container">
            <label htmlFor="quantity">Quantity: </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max="10"
            />
          </div>

          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart {cartCount > 0 ? `(${cartCount})` : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
