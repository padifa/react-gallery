import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import ImageList from '../ImageList/ImageList.jsx';
import { Container } from 'react-bootstrap';

function App() {
    const [imageList, setImageList] = useState([
        { url: '/images/cheetah.jpg', title: 'Cheetah', description: 'My beautiful tiger', liked: false },
    ]);

    useEffect(() => {
        fetchImageList();
    }, []);

    const fetchImageList = () => {
        axios.get('/api/gallery')
            .then((response) => {
                setImageList(response.data);
            })
            .catch((err) => console.error(`Error fetching gallery items`, err));
    };

    const handleImageLike = (image) => {
        // Logic to update the "like" status for an image
        axios.put(`/api/gallery/${image.id}`)
            .then(() => {
                fetchImageList(); // Refresh the list
            })
            .catch((error) => {
                console.error('Error updating like status', error);
            });
    };

    return (
        <Container>
            <div className='App'>
                <Header />
                <main>
                    <p>My Images</p>
                    <ImageList 
                        imageList={imageList} 
                        fetchImageList={fetchImageList} 
                        onImageLike={handleImageLike} 
                    />
                </main>
            </div>
        </Container>
    );
}

export default App;
