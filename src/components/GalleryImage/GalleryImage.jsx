import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 


function GalleryImage({ image, onImageLike }) {
    const [liked, setLiked] = useState(image.liked);
const [flipped, setFlipped] = useState(false);

const toggleFlip = () => {
    setFlipped(!flipped);
}
    return (
        <Col>
            <Card onClick={toggleFlip} style={{ cursor: 'pointer'}}>
               {!flipped ? (
                <img src={image.url || "/images/goat_small.jpg"} alt={image.title || "Goat"} className="img-fluid"/>) : (
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Title>{image.description}</Card.Title>
 
                    <Button 
                        className='mx-1' 
                        variant={liked ? 'success' : 'primary'} 
                        size="sm" 
                        onClick={() => {
                            e.stopPropagation();
                            setLiked(!liked);
                            onImageLike(image); 
                        }}>
                        {liked ? 'Liked' : 'Like'}
                    </Button>
                </Card.Body>
                )}
            </Card>
            
        </Col>
    );
}

export default GalleryImage;
