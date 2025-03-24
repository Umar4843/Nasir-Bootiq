import React, { useEffect } from "react";
import "./SareeDress.css"; // Unique CSS file
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const sareeItems = [
  { id: 1, title: "Royal Blue Silk Saree", price: 220, image: "https://i.pinimg.com/736x/0a/3f/88/0a3f88e8be4bda5b8b2119fa648b5d4b.jpg" },
  { id: 2, title: "Red Bridal Saree", price: 250, image: "https://i.pinimg.com/736x/52/1b/51/521b51e79eec41d66adf5e807d60dc71.jpg" },
  { id: 3, title: "Green Banarasi Saree", price: 230, image: "https://i.pinimg.com/736x/c4/98/9a/c4989ad4930f61355c5c47c88c995759.jpg" },
  { id: 4, title: "Golden Embroidered Saree", price: 270, image: "https://i.pinimg.com/736x/21/8f/49/218f49c6dc98e9d6bc6903d2b21c5d93.jpg" },
  { id: 5, title: "Black Sequin Saree", price: 200, image: "https://i.pinimg.com/736x/1b/9c/6f/1b9c6f5c469d0f88b34e9a24f924541a.jpg" },
  { id: 6, title: "Pink Georgette Saree", price: 210, image: "https://i.pinimg.com/736x/0e/4e/0e/0e4e0e88f3b769f367cf7c1c4b65aa6b.jpg" },
  { id: 7, title: "Pastel Peach Saree", price: 240, image: "https://i.pinimg.com/736x/38/80/02/388002632f5a9c248db8024f48e06527.jpg" },
  { id: 8, title: "White Designer Saree", price: 260, image: "https://i.pinimg.com/736x/9c/61/29/9c612950ce21ebf1b55b2b3c2ffb5972.jpg" },
  { id: 9, title: "Maroon Velvet Saree", price: 280, image: "https://i.pinimg.com/736x/56/35/2e/56352e09c08b7d1164f19cd9b3c9c9a9.jpg" },
];

const SareeDress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="saree-container">
        {/* Top Bar */}
        <div className="saree-top-bar">
          <h1>Saree Dress Collection</h1>
          <p>Discover timeless elegance with our premium saree collection ✨</p>
        </div>

        {/* Saree Grid */}
        <div className="saree-grid">
          {sareeItems.map((item) => (
            <div key={item.id} className="saree-card">
              <img src={item.image} alt={item.title} className="saree-image" />
              <h3 className="saree-name">{item.title}</h3>
              <p className="saree-price">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SareeDress;
