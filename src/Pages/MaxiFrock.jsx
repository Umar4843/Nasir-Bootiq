import React, { useEffect } from 'react';
import "./MaxiFrock.css"; // Unique CSS file
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';


const maxiFrockItems = [
  { id: 1, title: "Elegant Black Maxi", price: 120, image: "https://webmerx.sgp1.cdn.digitaloceanspaces.com/ethnicroop/product_images/1599543627.Black_Color_Embroidery_Work_Part_Wear_Long_Gown_(2).jpeg" },
  { id: 2, title: "Royal Blue Embroidered Maxi", price: 150, image: "https://bridalcollection.pk/wp-content/uploads/2023/11/n.jpg" },
  { id: 3, title: "Classic Maroon Frock", price: 130, image: "https://www.dressyzone.com/cdn/shop/files/p17644-readymade-silk-maxi-dress_580x.jpg?v=1729856403" },
  { id: 4, title: "Ivory Gold Maxi", price: 170, image: "https://cdn.ecommercedns.uk/files/8/216208/6/47398846/6-f278b43f-c70b-4ac8-ae4d-07d2c8458cc4.jpg" },
  { id: 5, title: "Floral Pink Frock", price: 110, image: "https://www.vastranand.in/cdn/shop/files/1_c6316707-0f46-4201-b45d-06b6509bd7ec.jpg?v=1716447728" },
  { id: 6, title: "Golden Chiffon Maxi", price: 160, image: "https://faashwear.com/wp-content/uploads/2023/12/IMG_2047.jpeg" },
  { id: 7, title: "Red Bridal Maxi", price: 180, image: "https://nameerabridal.com/wp-content/uploads/2025/02/4-1-1.jpg" },
  { id: 8, title: "Blue Georgette Maxi", price: 140, image: "https://images.meesho.com/images/products/322276383/d0pol_512.webp" },
  { id: 9, title: "White Pearl Maxi", price: 175, image: "https://www.mariab.pk/cdn/shop/products/mc-044-whiteb_1080x.jpg?v=1672339366" },
  { id: 10, title: "Green Anarkali Frock", price: 135, image: "https://peachmode.com/cdn/shop/products/green-partywear-embroidered-georgette-anarkali-suit-peachmode-1_f2803b53-6822-4836-bbc3-5e3490a3e435.jpg" },
  { id: 11, title: "Lavender Embroidered Maxi", price: 155, image: "https://i.pinimg.com/564x/30/43/32/30433290b14bfab4ad575ec588c09cf0.jpg" },
  { id: 12, title: "Mustard Yellow Frock", price: 125, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/0/4/r/xxl-na-mustard-moti-leeshu-enterprises-original-imagzdsvyxq5fbpj.jpeg?q=20&crop=false" },
];

const MaxiFrock = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maxi & Frock  | Explore Your Favourite</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div className="maxi-frock-container">
        <div className="instakhaadi-header">
          <h1>Maxi & Frock Collection</h1>
          <p>Discover trending styles from our Instagram feed 📸</p>
        </div>
        <div className="maxi-frock-grid">
          {maxiFrockItems.map((item) => (
            <div key={item.id} className="maxi-frock-card">
              <img src={item.image} alt={item.title} className="maxi-frock-image" />
              <h3 className="maxi-frock-name">{item.title}</h3>
              <p className="maxi-frock-price">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MaxiFrock;