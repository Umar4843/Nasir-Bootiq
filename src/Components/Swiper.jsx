import React from 'react';
import Footer from './Footer';
import './Swiper.css'; // You can rename this later

const products = [
    {
        name: "Embroidered Lawn Suit",
        price: "$49.99",
        image: "https://polawn.com/cdn/shop/files/1_362c0f07-68f3-4e2c-94d2-252b67d1a4e0.jpg?v=1710194906",
        badge: "New"
    },
    {
        name: "Bridal Red Maxi",
        price: "$199.00",
        image: "https://aminascollection.com/cdn/shop/products/d-1_front_1.jpg?v=1740812430",
        badge: "Sale"
    },
    {
        name: "Chiffon Saree",
        price: "$89.00",
        image: "https://mysilklove.com/cdn/shop/files/MSL-b1_73445cb1-097f-4319-ae00-a264364acf4c.jpg?v=1709641722&width=1080",
        badge: "Hot"
    },
    {
        name: "Mehndi Dress",
        price: "$129.99",
        image: "https://cdn.feebee.pk/wp-content/uploads/2022/10/badan-300x480.jpg",
        badge: "New"
    },
    {
        name: "Wedding Dress",
        price: "$89.50",
        image: "https://cdn.feebee.pk/wp-content/uploads/2022/10/badan-300x480.jpg",
        badge: "New"
    },
    {
        name: "Classic Frock",
        price: "$105.99",
        image: "https://i.pinimg.com/736x/30/d5/19/30d5198fb6013f3a87aa1421a7735b9e.jpg",
        badge: "Featured"
    },
    {
        name: "Anarkali Dress",
        price: "$149.00",
        image: "https://www.fashionvibes.net/cdn/shop/products/new-designer-raw-silk-anarkali-suit-salwar-suit-fashionvibes-15543243735089.jpg",
        badge: "Limited"
    },
    {
        name: "Silk Saree",
        price: "$159.00",
        image: "https://ivalinmabia.com/cdn/shop/files/sita-dark-maroon-semi-silk-saree-sarees-305.webp?v=1725373058&width=1500",
        badge: "Trending"
    }
];

export default function App() {
    return (
        <>
            <div className="product-grid-container margin-top-100px">
                {products.map((item, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-image-wrapper">
                            <img src={item.image} alt={item.name} className="product-image" />
                            <span className="badge">{item.badge}</span>
                        </div>
                        <div className="product-info">
                            <h5>{item.name}</h5>
                            <p className="price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}
