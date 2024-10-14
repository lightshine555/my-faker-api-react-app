import React, { useEffect, useState } from 'react';
import { fetchImages } from 'services/ImageService';
import { ImageData } from 'models/Image';
import './ImageList.scss';

const ImageList: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const data = await fetchImages();
                setImages(data.data);
            } catch (err) {
                setError('Failed to fetch images');
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Image Gallery</h1>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <div className="image-card" key={index}>
                        <img src={image.url} alt={image.title} />
                        <h2>{image.title}</h2>
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;