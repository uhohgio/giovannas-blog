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
  if (!images || images.length === 0) {
    return null; // Return nothing if there are no images
  }
  return (
    <>
    <h2 className=" font-orbitron max-w-2xl mx-auto mb-8 mt-8"> Photo Gallery </h2>
    <div className="max-w-2xl mx-auto" style={styles.imageContainer}>
      {images?.map((image, index) => (
        <img key={index} src={image.url} alt={image.alt || ''} style={styles.img} />
      ))}
    </div>
    </>
  );
};

export default ImageList;