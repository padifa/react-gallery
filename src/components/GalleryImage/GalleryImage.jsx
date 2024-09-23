import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';  
function GalleryImage({ image, onImageLike }) {
    const [liked, setLiked] = useState(image.liked);
const [flipped, setFlipped] = useState(false);

const toggleFlip = () => {
    setFlipped(!flipped);
};

const handleLikeClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    onImageLike(image);
}
    return (
        <Col>
            <Card onClick={toggleFlip} style={{ cursor: 'pointer'}}>
                <img src={image.url || "/images/goat_small.jpg"} alt={image.title || "Goat"} className="img-fluid"
                style={{ display: flipped ? 'none' : 'block' }} />
                <Card.Body style={{ display: flipped ? 'block' : 'none' }}>
                    <Card.Title>{image.title}</Card.Title>
 </Card.Body>
                    <Button 
                        className='mx-1' 
                        variant={liked ? 'success' : 'primary'} 
                        size="sm" 
                        onClick={handleLikeClick} 
                        style={{ position: 'absolute', bottom: '10px', right: '10px'}}>
                        {liked ? 'Liked' : 'Like'}
                    </Button>
                
                
            </Card>
            
        </Col>
    );
}

export default GalleryImage;
