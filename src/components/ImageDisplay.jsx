// src/components/ImageDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  // Function to fetch images from Django backend
  useEffect(() => {
    axios.get('/api/images/')  // Adjust the API endpoint as per your Django setup
      .then(response => {
        setImages(response.data);
        if (response.data.length > 0) {
          setSelectedImage(response.data[0]);  // Select the first image by default
        }
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  // Function to fetch recommendations based on selected image
  useEffect(() => {
    if (selectedImage) {
      axios.get(`/api/recommendations/${selectedImage.id}/`)  // Adjust the API endpoint
        .then(response => setRecommendations(response.data))
        .catch(error => console.error('Error fetching recommendations:', error));
    }
  }, [selectedImage]);

  // Function to handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h2>Image Display and Recommendations</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {images.map(image => (
          <img
            key={image.id}
            src={image.image_path}  // Assuming image_path is the URL to your image
            alt={`Image ${image.id}`}
            onClick={() => handleImageSelect(image)}
            style={{
              width: '100px',
              height: 'auto',
              margin: '5px',
              cursor: 'pointer',
              border: selectedImage && selectedImage.id === image.id ? '2px solid blue' : 'none'
            }}
          />
        ))}
      </div>
      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <img src={selectedImage.image_path2} alt={`Image ${selectedImage.id}`} style={{ maxWidth: '400px' }} />
          <h3>Recommendations:</h3>
          <ul>
            {recommendations.map(rec => (
              <li key={rec.id}>
                <img src={rec.image_path2} alt={`Recommendation ${rec.id}`} style={{ width: '100px', height: 'auto' }} />
                <p>Clothing Type: {rec.clothing_type} (Score: {rec.score.toFixed(2)})</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
