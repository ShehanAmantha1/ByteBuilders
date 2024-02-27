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
      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_07-22-01.36.19.jpg")}>
        <img src="./Images/PicsArt_07-22-01.36.19.jpg" alt="Placeholder Image 1" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_11-16-11.30.58.jpg")}>
        <img src="./Images/PicsArt_11-16-11.30.58.jpg" alt="Placeholder Image 2" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_05-10-08.32.34.jpg")}>
        <img src="./Images/PicsArt_05-10-08.32.34.jpg" alt="Placeholder Image 3" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_04-19-12.36.09.jpg")}>
        <img src="./Images/PicsArt_04-19-12.36.09.jpg" alt="Placeholder Image 4" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/2019-08-11-13-54-38-01.jpeg")}>
        <img src="./Images/2019-08-11-13-54-38-01.jpeg" alt="Placeholder Image 5" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/20221004_103059.jpg")}>
        <img src="./Images/20221004_103059.jpg" alt="Placeholder Image 6" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/20230626_175254 (1).jpg")}>
        <img src="./Images/20230626_175254 (1).jpg" alt="Placeholder Image 7" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/20230315_153011.jpg")}>
        <img src="./Images/20230315_153011.jpg" alt="Placeholder Image 8" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_09-11-01.27.21 (3).jpg")}>
        <img src="./Images/PicsArt_09-11-01.27.21 (3).jpg" alt="Placeholder Image 9" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/20230801_091813 (1) (1).jpg")}>
        <img src="./Images/20230801_091813 (1) (1).jpg" alt="Placeholder Image 10" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_09-20-01.08.03.jpg")}>
        <img src="./Images/PicsArt_09-20-01.08.03.jpg" alt="Placeholder Image 11" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_07-23-10.47.55.jpg")}>
        <img src="./Images/PicsArt_07-23-10.47.55.jpg" alt="Placeholder Image 12" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/20231019_143347.jpg")}>
        <img src="./Images/20231019_143347.jpg" alt="Placeholder Image 13" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/20231217_163322.jpg")}>
        <img src="./Images/20231217_163322.jpg" alt="Placeholder Image 14" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/PicsArt_07-22-04.55.41.jpg")}>
        <img src="./Images/PicsArt_07-22-04.55.41.jpg" alt="Placeholder Image 15" />
      </div>

      <div className="image-gallery-item" onClick={() => openModal("./Images/20231009_180805.jpg")}>
        <img src="./Images/20231009_180805.jpg" alt="Placeholder Image 14" />
      </div>
      {/* Add more image-gallery-items here */}
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
