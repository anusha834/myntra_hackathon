// src/components/ClothingDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClothingDetail = ({ match }) => {
  const [item, setItem] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    axios.get(`/api/clothing/item/${id}/`)
      .then(response => setItem(response.data))
      .catch(error => console.error(error));
    
    axios.get(`/api/clothing/recommend/${id}/`)
      .then(response => setRecommendations(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h2>Clothing Detail</h2>
      <img src={item.image_path} alt={item.clothing_type} width="200" />
      <h3>Recommendations</h3>
      <ul>
        {recommendations.map(rec => (
          <li key={rec.image_path}>
            <img src={rec.image_path} alt={rec.clothing_type} width="100" />
            <p>{rec.clothing_type} (Score: {rec.score.toFixed(2)})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothingDetail;
