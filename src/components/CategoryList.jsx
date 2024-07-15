// src/components/CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['boho', 'e-girl', 'oldmoney'];

const CategoryList = () => (
  <div>
    <h2>Categories</h2>
    <ul>
      {categories.map(category => (
        <li key={category}>
          <Link to={`/clothing/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CategoryList;
