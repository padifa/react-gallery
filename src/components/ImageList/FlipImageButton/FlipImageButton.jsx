import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './FlipImageButton.css';

function FlipImageButton({ image }) {
    const [flipped, setFlipped] = useState(false);  

   
    const toggleFlip = () => {
        setFlipped(!flipped);
        console.log
    };

    return (
        <Button 
            className={`flip-button ${flipped ? 'flipped' : ''}`} 
            onClick={toggleFlip} 
            style={{ width: '200px', height: '200px' }} 
        >
            <div className="flip-button-inner">
               
                <div className="flip-button-front">
                    <img 
                        src={image.url || "/images/cheetah.jpg"} 
                        alt={image.title || "Cheetah"} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </div>
              
                <div className="flip-button-back">
                    <p>{image.description}</p>
                </div>
            </div>
        </Button>
    );
}

export default FlipImageButton;
