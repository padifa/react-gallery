import Row from 'react-bootstrap/Row';
import GalleryImage from '../GalleryImage/GalleryImage.jsx';

function ImageList({ imageList, fetchImageList, }) {

    const handleImageLike = (image) => {
       
        axios.put(`/api/gallery/${image.id}`)
            .then(() => {
                fetchImageList(); 
            })
            .catch((error) => {
                console.error('Error updating like status', error);
            });
    };

    return (
        <Row>
            {imageList.map((image) => (
                <GalleryImage 
                    key={image.id} 
                    image={image} 
                    onImageLike={handleImageLike} 
                />
                
            ))}
        </Row>
    );
}

export default ImageList;
