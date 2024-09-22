import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';  // Import Button

function GalleryImage({ image, onImageLike }) {
    const [liked, setLiked] = useState(image.liked);

    return (
        <Col>
            <Card>
                <img src={ "/images/goat_small.jpg"} alt={ "Goat"} className="img-fluid"/>
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>{image.description}</Card.Text> {/* Use Card.Text */}
                    <Button 
                        className='mx-1' 
                        variant={liked ? 'success' : 'primary'} 
                        size="sm" 
                        onClick={() => {
                            setLiked(!liked);
                            onImageLike(image);  // Notify parent component
                        }}>
                        {liked ? 'Liked' : 'Like'}
                    </Button>
                </Card.Body>
                
            </Card>
            <Card>
                <img src={image.url || "images/Clever-Clair-150x150.jpg"} alt={image.title || "Goat"} className="img-fluid"/>
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>{image.description}</Card.Text> 
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
