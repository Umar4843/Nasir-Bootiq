import React, { useEffect } from "react";
import Header from "../Components/Header"; 
import Footer from "../Components/Footer"; 
import "./Bridal.css";

const bridalDresses = [
  { id: 1, title: "Elegant Red Bridal Lehenga", price: 250, image: "https://i.pinimg.com/736x/5f/69/4e/5f694eda7af03de99caa0b4a7803af3b.jpg" },
  { id: 2, title: "Golden Embroidered Gown", price: 300, image: "https://www.clotherebyanam.com/cdn/shop/products/013A4096-scaled.jpg?v=1717529288&width=1445" },
  { id: 3, title: "Classic Maroon Bridal Outfit", price: 275, image: "https://neel.pk/cdn/shop/files/Snapinsta.app_463071868_847672190857610_6808150519125521773_n_1024_46c539df-d4cc-427b-a731-e9053194657f.jpg?v=1729366511&width=1445" },
  { id: 4, title: "Ivory Gold Pakistani Bridal Lehenga", price: 320, image: "https://zuriador.com/cdn/shop/products/Afrin1.jpg?v=1596455070" },
  { id: 5, title: "Rose Gold Bridal Lehenga", price: 290, image: "https://www.nameerabyfarooq.com/cdn/shop/products/PakistaniBridalRoseGoldLehengaFrockandDupattaDress_1080x.webp?v=1648296281" },
  { id: 6, title: "Heavily Embellished Anarkali", price: 310, image: "https://i0.wp.com/saadibrahimstudio.com/wp-content/uploads/2020/09/CDA014AD-315A-451C-AF2C-372835B14351-scaled.jpeg?fit=1709%2C2560&ssl=1" },
  { id: 7, title: "Deep Red Bridal Saree", price: 265, image: "https://i.pinimg.com/736x/83/dd/c3/83ddc3c278519992e1bf6db7e53284b8.jpg" },
  { id: 8, title: "Traditional Golden Lehenga", price: 295, image: "https://i.pinimg.com/736x/a0/5b/11/a05b11aa6896a461103d57c894d0a780.jpg" },
  { id: 9, title: "Royal Blue Wedding Outfit", price: 310, image: "https://www.alinanova.com/cdn/shop/products/Long-Sleeves-Royal-Blue-Lace-Ball-Gowns-Wedding-Dresses.jpg?v=1641830907" },
  { id: 10, title: "Pink Floral Bridal Dress", price: 280, image: "https://www.fashionfoody.com/wp-content/uploads/2018/07/indo-western-dresses.jpg" },
  { id: 11, title: "Velvet Red Bridal Lehenga", price: 330, image: "https://cdn.sareeka.com/image/cache/data2022/velvet-embroidered-red-designer-lehenga-choli-219972-1000x1375.jpg" },
  { id: 12, title: "Silver Embroidered Anarkali", price: 305, image: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/a/n/anarkali-suit-web-11-img-.jpg" },
  { id: 13, title: "Golden Red Bridal Gown", price: 315, image: "https://wedmeplz.com/wp-content/uploads/2020/11/0085b687698320f12884e49b23142868.jpg" },
  { id: 14, title: "White & Gold Bridal Dress", price: 340, image: "https://www.shadidress.com/wp-content/uploads/2024/09/White-and-Gold-Bridal-Lehenga-4.webp" },
  { id: 15, title: "Classic Beige Bridal Outfit", price: 285, image: "https://www.dressyzone.com/cdn/shop/files/p14769-embroidered-bridal-maxi-dress.jpg?v=1719467167" }
];

const Bridal = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Header />
      <div className="bridal-container">
        <h1 className="bridal-title">Bridal Collection</h1>
        <div className="bridal-grid">
          {bridalDresses.map((dress) => (
            <div key={dress.id} className="bridal-card">
              <img src={dress.image} alt={dress.title} className="bridal-image" />
              <h3 className="bridal-name">{dress.title}</h3>
              <p className="bridal-price">${dress.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bridal;
