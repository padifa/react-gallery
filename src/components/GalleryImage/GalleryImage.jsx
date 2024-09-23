import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';  
function GalleryImage({ image, onImageLike }) {
    const [liked, setLiked] = useState(image.liked);

    return (
        <Col>
            <Card>
                <img src={image.url || "/images/goat_small.jpg"} alt={image.title || "Goat"} className="img-fluid"/>
                <img src={image.url || '/images/Clever-Clair-150x150.jpg'} alt={image.title || 'Clever clair'} className="img-fluid"/>
        <img src={ image.url ||'/images/goat_small.jpg'} alt={image.title ||'Small goat'} className="img-fluid"/>
        <img src={ image.url ||'/images/lezard.jpg'} alt={image.title || 'Lezard'} className="img-fluid"/>
        <img src={ image.url || '/images/Ruthie-Palm-150x150.jpg'} alt={image.title || 'Strange'} className="img-fluid"/>
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title> 
                    <Button 
                        className='mx-1' 
                        variant={liked ? 'success' : 'primary'} 
                        size="sm" 
                        onClick={() => {
                            setLiked(!liked);
                            onImageLike(image); 
                        }}>
                        {liked ? 'Liked' : 'Like'}
                    </Button>
                </Card.Body>
                
            </Card>
            
        </Col>
    );
}

export default GalleryImage;
