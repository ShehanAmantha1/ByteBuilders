// ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css';
import ImageModal from './ImageModal';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("stefan-kunze--6-uqd2hMCg-unsplash.jpg")}>
        <img src="stefan-kunze--6-uqd2hMCg-unsplash.jpg" alt="Placeholder Image 2" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.41.05_24a44ceb.jpg" alt="Placeholder Image 3" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg")}>
        <img src="WhatsApp Image 2024-02-24 at 11.39.45_0bccd467.jpg" alt="Placeholder Image 1" />
      </div>
      {/* Add more image-gallery-items here */}
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
