import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

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

const Products = () => {
  return (
    <div className="products">
      <h1 style={{color:"white"}}>Our Products</h1>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="buy-now-btn">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
