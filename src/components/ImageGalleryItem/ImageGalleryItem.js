import React from 'react';
import './ImageGalleryItem.scss';

const ImageGalleryItem = ({
  id,
  webformatURL,
  toggleModal,
  setCurrentLargeImageURL,
}) => {
  return (
    <li
      index={id}
      className="ImageGalleryItem"
      onClick={() => {
        toggleModal();
        setCurrentLargeImageURL(id);
      }}
    >
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
