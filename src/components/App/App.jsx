import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import FlipImageButton from '../ImageList/FlipImageButton/FlipImageButton.jsx';

function App() {
    const [imageList, setImageList] = useState([
        { url: '/images/cheetah.jpg', title: 'Cheetah', description: 'My beautiful tiger', liked: false },
        { url: '/images/Clever-Clair-150x150.jpg', title: 'Clever clair', description: 'The stylish Dog', liked: false },
        { url: '/images/goat_small.jpg', title: 'Small goat', description: 'The attractive goat', liked: false },
        { url: '/images/lezard.jpg', title: 'Lezard', description: 'Confident reptile', liked: false },
        { url: '/images/Ruthie-Palm-150x150.jpg', title: 'Strange', description: 'I think he is scared', liked: false },
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

    return (
        <Container>
            <div className='App'>
                <Header />
                <main>
                    <p>My Images</p>
                    {/* Map over imageList to render one FlipImageButton per image */}
                    {imageList.map((image) => (
                        <FlipImageButton key={image.title} image={image} />
                    ))}
                </main>
            </div>
        </Container>
    );
}

export default App;
