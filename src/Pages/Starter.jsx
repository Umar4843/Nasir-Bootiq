import React from 'react';
import { useNavigate } from 'react-router-dom';

const Starter = () => {
    const navigate = useNavigate();

    return (
        <div className="contain">
            <div className="container">
                <img 
                    src="https://www.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8386fcc3/images/splash-logo.png" 
                    alt="Logo"  
                    className="logo" 
                />
                <div className="down-container">
                <h2 className="welcome-text">Welcome to Nasir Boutique</h2>
                    <hr className="divider" />
                    <button className="continue-btn" onClick={() => navigate("/home")}>
                        CONTINUE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Starter;
