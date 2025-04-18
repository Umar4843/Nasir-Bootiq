import React, { useEffect } from "react";
import "./SareeDress.css"; // Unique CSS file
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

const sareeItems = [
  { id: 1, title: "Royal Blue Silk Saree", price: 220, image: "https://5.imimg.com/data5/SELLER/Default/2023/9/342837592/YT/WF/HO/196425226/purple-embellished-geometric-print-self-design-chiffon-saree-500x500.jpg" },
  { id: 2, title: "Red Bridal Saree", price: 250, image: "https://www.parivarceremony.com/media/catalog/product/cache/62408a38a401bb86dbe3ed2f017b539f/p/2/p2111sr01.jpg" },
  { id: 3, title: "Green Banarasi Saree", price: 230, image: "https://www.houbara.com.bd/storage/products/3233s893-1.jpg" },
  { id: 4, title: "Golden Embroidered Saree", price: 270, image: "https://d2ma7w4w9grdob.cloudfront.net/media/41688Golden-Lycra-Embroidery-Saree-with-Blouse-Piece-SR-92006(1).jpg" },
  { id: 5, title: "Black Sequin Saree", price: 200, image: "https://ethnicgruh.com/wp-content/uploads/2024/09/IMG_3199.jpg" },
  { id: 6, title: "Pink Georgette Saree", price: 210, image: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/z/a/zari-embroidered-georgette-punch-pink-saree-sarv143015-1.jpg" },
  { id: 7, title: "Pastel Peach Saree", price: 240, image: "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/6/6679sr02-klc9211.jpg" },
  { id: 8, title: "White Designer Saree", price: 260, image: "https://static.wixstatic.com/media/897441_b64c02e703af4c759591ef5c586d7c21~mv2.jpg/v1/fill/w_480,h_672,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/897441_b64c02e703af4c759591ef5c586d7c21~mv2.jpg" },
  { id: 9, title: "Maroon Velvet Saree", price: 280, image: "https://img.faballey.com/images/Product/ISS00011Z/3.jpg" },
];

const SareeDress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sareeh Dresses | Explore Your Favourite</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
