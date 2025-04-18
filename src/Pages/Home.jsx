import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Swiper from '../Components/Swiper';
import './Loader.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Nasir Botiques | Explore Your Favourite</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      
      {loading ? (
        <div className="loader-container">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaazDwg9XF12GtvnTKDhXcJpvg-DS8LwfHkg&s" 
            alt="Loading..." 
            className="loader-image"
          />
        </div>
      ) : (
        <>
          <Header />
          <Swiper />
        </>
      )}
    </div>
  );
};

export default Home;
