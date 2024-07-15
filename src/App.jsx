

import React from 'react';
import './App.css';
import CategoryCard from './components/CategoryCard';

import image1 from "./assets/boho image.jpg";
import image2 from "./assets/egirl.jpg";
import image3 from "./assets/old.jpg";
import image4 from './assets/nav_bar.jpg';



const categories = [
  {
    label: 'BOHO',
    image: image1,
  },
  {
    label: 'EGIRL',
    image: image2,
  },
  {
    label: 'OLDMONEY',
    image: image3,
  },
];

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img className="navbar" src={image4} alt="navbar"/>
     
      </header>
      <div >
      {/* <h1>Fashion Categories</h1> */}
      {/* <input type="file" className="upload-btn" />  */}
      
      </div>
      <div className="categories">
      
        {categories.map((category, index) => (
          <CategoryCard key={index} image={category.image} label={category.label} />
          
        ))}
      </div>
    </div>
  );
};

export default App;
// frontend/src/App.js

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CategoryList from './components/CategoryList';
// import ClothingList from './components/ClothingList';
// import ClothingDetail from './components/ClothingDetail';

// const App = () => (
//   <Router>
//     <Switch>
//       <Route path="/" exact component={CategoryList} />
//       <Route path="/clothing/:category" exact component={ClothingList} />
//       <Route path="/clothing/item/:id" component={ClothingDetail} />
//     </Switch>
//   </Router>
// );


// export default ImageDisplay;

// src/App.js
// src/App.js
// import React from 'react';
// import ImageDisplay from './components/ImageDisplay';

// const App = () => (
//   <div>
//     <h1>My Fashion Recommender App</h1>
//     <ImageDisplay />
//   </div>
// );




// export default App;




