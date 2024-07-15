import React from 'react';
import '../styles/CategoryCards.css'

const CategoryCard = ({ image, label }) => {
  return (
    <div className="category-card">
      <img src={image} alt={label} />
    
      <div className="label">{label}</div>
      
    </div>
  );
};

export default CategoryCard;
