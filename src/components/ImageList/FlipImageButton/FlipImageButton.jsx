import { useState } from "react";
import Button from 'react-bootstrap/Button';

function FlipImageButton({ image, onImageLike}) {
    const [liked, setLiked] = useState(image.liked);
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <Button classname={`flip-button ${flipped ? 'flipped' : ''}`}
        onClick={toggleFlip}
        style={{ width: '200px', height: '200px'}}>
<div className="flip-button-inner">
    <div className="flip-button-front">
<img src={ image.url || "/images/cheetah.jpg"} alt={image.title || "Cheetah"} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
</div>

{/* 
        { url: '/images/Clever-Clair-150x150.jpg', title: 'Clever clair', description: 'The stylish Dog', liked: false },
        { url: '/images/goat_small.jpg', title: 'Small goat', description: 'The attractive goat', liked: false },
        { url: '/images/lezard.jpg', title: 'Lezard', description: 'Confident reptile', liked: false },
        { url: '/images/Ruthie-Palm-150x150.jpg', title: 'Strange', description: 'I think he is scared', liked: false }, */}
</div>

        </Button>
    )
}
