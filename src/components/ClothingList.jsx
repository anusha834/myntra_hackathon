// src/components/ClothingList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClothingList = ({ match }) => {
  const [items, setItems] = useState([]);
  const { category } = match.params;

  useEffect(() => {
    axios.get(`/api/clothing/${category}/`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/clothing/item/${item.id}`}>
              <img src={item.image_path} alt={item.clothing_type} width="100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothingList;
