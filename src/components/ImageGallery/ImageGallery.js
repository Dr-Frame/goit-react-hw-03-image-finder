import React from 'react';
import './ImageGallery.scss';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ picturesData, showModal, setUrl }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem
        dataRender={picturesData}
        showModal={showModal}
        setUrl={setUrl}
      />
    </ul>
  );
};

export default ImageGallery;
