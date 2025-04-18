import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
const mehndiDresses = [
    { id: 1, title: "Elegant Green Mehndi Dress", price: 120, image: "https://i.pinimg.com/736x/c4/48/53/c448536e2d82f28a18bd09fd2a40b5d3.jpg", description: "Beautiful traditional mehndi dress with embroidery." },
    { id: 2, title: "Golden Glow Mehndi Outfit", price: 150, image: "https://blog.shaadivyah.com/wp-content/uploads/2024/12/Radiant-Mehndi-Makeup-Look-with-Golden-Glow.jpg", description: "A stunning golden mehndi outfit for festive occasions." },
    { id: 3, title: "Classic Yellow Mehndi Attire", price: 100, image: "https://www.wedabout.com/blog/wp-content/uploads/2023/05/new-lime-green-lehenga-bridal-mehndi-dress-1.jpg", description: "Traditional yellow mehndi dress with mirror work." },
    { id: 4, title: "Royal Green Anarkali Dress", price: 180, image: "https://assets0.mirraw.com/images/7497999/image_zoom.jpeg?1571052797", description: "Graceful Anarkali suit with intricate patterns." },
    { id: 5, title: "Modern Mehndi Gown", price: 200, image: "https://www.hatkay.com/cdn/shop/products/tathastu-08.jpg", description: "Elegant mehndi gown with detailed embroidery." },
    { id: 6, title: "Floral Embroidered Mehndi Suit", price: 130, image: "https://www.nameerabyfarooq.com/cdn/shop/files/NewLuxuryMehndiGreenEmbroideredPakistaniSalwarKameezDupattaSuit_620x.jpg?v=1697640586", description: "Charming floral embroidery suit for special events." },
    { id: 7, title: "Mustard Mehndi Dress", price: 110, image: "https://alinaashfaq.com/cdn/shop/collections/FarshiGhararaKameezPakistaniBridalDress_1800x1800_a636a5f3-2228-4928-ac9a-505b80d2c4a6.jpg?v=1699008979", description: "Stylish mustard-colored mehndi dress for weddings." },
    { id: 8, title: "Pastel Green Mehndi Lehenga", price: 170, image: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/i/m/image_2023_03_29t11_49_29_328z.jpg", description: "Delicate pastel green lehenga for mehndi celebrations." },
    { id: 9, title: "Traditional Mehndi Saree", price: 160, image: "https://cdn.sareeka.com/image/cache/data2021/traditional-designer-saree-for-mehndi-198651-1000x1375.jpg", description: "Classic mehndi saree with detailed patterns." },
    { id: 10, title: "Yellow and Green Festive Suit", price: 125, image: "https://5.imimg.com/data5/NU/FQ/VT/SELLER-8330475/pr-fashion-launched-beautiful-festive-season-suit.jpg", description: "A perfect blend of yellow and green hues." },
    { id: 11, title: "Embellished Mehndi Dress", price: 190, image: "https://i.pinimg.com/736x/5a/4d/18/5a4d18d2710bab53b9a4ab6204fca09d.jpg", description: "Elegant embellishments on a modern mehndi dress." },
    { id: 12, title: "Mehndi Floral Maxi Dress", price: 140, image: "https://www.nameerabyfarooq.com/cdn/shop/products/bridallehengamaxi_620x.jpg?v=1634942093", description: "Flowy maxi dress with floral mehndi details." },
    { id: 13, title: "Yellow Mirror Work Mehndi Suit", price: 175, image: "https://i.pinimg.com/736x/d3/17/fa/d317fa66e62f40ef6205014210640fc9.jpg", description: "Traditional mehndi dress with intricate mirror work." },
    { id: 14, title: "Golden Yellow Mehndi Lehenga", price: 195, image: "https://getethnic.com/wp-content/uploads/2021/12/Yellow-Bridal-lehenga-6-1.jpg", description: "Luxurious golden yellow lehenga for mehndi brides." },
    { id: 15, title: "Embroidered Green Mehndi Suit", price: 135, image: "https://static-01.daraz.pk/p/ae2a75bf0d55ac31e4864b84e8751194.jpg", description: "Stylish embroidered green mehndi suit." },
    { id: 16, title: "Traditional Mehndi Anarkali", price: 185, image: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/s/a/sage-green-embroidered-net-anarkali-suit-for-mehndi-lstv125120-1.jpg", description: "An elegant Anarkali dress perfect for mehndi events." },
    { id: 17, title: "Classic Festive Mehndi Gown", price: 165, image: "https://www.mariab.pk/cdn/shop/collections/mehndidrop.jpg?v=1672841412", description: "A graceful gown with traditional mehndi patterns." },
    { id: 18, title: "Yellow and Green Mehndi Saree", price: 155, image: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/g/r/green-and-yellow-silk-embroidered-saree-sarv139883-1.jpg", description: "A unique saree designed for mehndi functions." },
    { id: 19, title: "Heavily Embroidered Mehndi Outfit", price: 220, image: "https://bushrastore.pk/wp-content/uploads/2024/01/1000210891.jpg", description: "Exquisite embroidery work on a mehndi outfit." },
    { id: 20, title: "Simple Mehndi Dress with Dupatta", price: 90, image: "https://cdn.shopify.com/s/files/1/0341/4805/7228/files/img_3_3.webp?v=1714999661", description: "Minimalist mehndi dress with a stylish dupatta." }
];



const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mehndi Dresses | Explore Your Mehndi Designs</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <div className="main-content">
                <div className="products-container">
                    {mehndiDresses.map((item) => (
                        <div key={item.id} className="product-card">
                            <img src={item.image} alt={item.title} className="product-image" />
                            <div className="product-info">
                                <h2 className="product-title">{item.title}</h2>
                                <p className="product-description">
                                    {item.description.substring(0, 100)}...
                                </p>
                                <b className="product-price">${item.price}</b>
                                <Link to={`/product/${item.id}`} className="buy-link">
                                    <button className="buy-button">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;
