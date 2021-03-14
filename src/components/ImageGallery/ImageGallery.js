import React, { Component } from 'react';
import './ImageGallery.scss';
import Searchbar from '../Searchbar';
import ImageGalleryItem from '../ImageGalleryItem';
import galleryApi from '../../services/gallery-api';
import Button from '../Button';
import Loader from 'react-loader-spinner';
import Modal from '../Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    currentLargeImageURL: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setCurrentLargeImageURL = id => {
    let currentImage = this.state.images.find(image => image.id === id);
    this.setState({ currentLargeImageURL: currentImage.largeImageURL });
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    galleryApi(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  render() {
    const {
      images,
      isLoading,
      error,
      showModal,
      currentLargeImageURL,
    } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={currentLargeImageURL}
          />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL }) => (
            <ImageGalleryItem
              id={id}
              key={id}
              webformatURL={webformatURL}
              toggleModal={this.toggleModal}
              setCurrentLargeImageURL={this.setCurrentLargeImageURL}
            />
          ))}
        </ul>
        {error && <h2>Извините, что-то пошло не так</h2>}
        {isLoading && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}

export default ImageGallery;
