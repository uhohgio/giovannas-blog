import React from 'react';
import { type Image } from '@/interfaces/image';

const styles = {
  imageContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '1rem',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '1rem',
  },
};

const ImageList: React.FC<{ images: Image[] }> = ({ images }) => {
  return (
    <div style={styles.imageContainer}>
      {images?.map((image, index) => (
        <img key={index} src={image.url} alt={image.alt || ''} style={styles.img} />
      ))}
    </div>
  );
};

export default ImageList;