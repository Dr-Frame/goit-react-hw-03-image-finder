import React from 'react';
import './ImageGalleryItem.scss';

const show = e => {
  console.log(e.currentTarget);
};

const ImageGalleryItem = ({ dataRender, showModal, setUrl }) => (
  <>
    {dataRender.map(({ id, webformatURL, largeImageURL, type }) => {
      return (
        <li className="ImageGalleryItem" key={id} onClick={setUrl}>
          <img
            src={webformatURL}
            alt={type}
            data-big={largeImageURL}
            className="ImageGalleryItem-image"
            onClick={showModal}
          />
        </li>
      );
    })}
  </>
);

export default ImageGalleryItem;
