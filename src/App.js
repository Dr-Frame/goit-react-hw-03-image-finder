import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import axios from 'axios';
import fetchPictures from './service/fetchApi';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Spinner from './components/Spinner';
import Modal from './components/Modal';

class App extends Component {
  state = {
    pictures: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    showModal: false,
    url: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  searchQueryChange = query => {
    this.setState({
      searchQuery: query,
      pictures: [],
      page: 1,
      isLoading: false,
    });
  };

  fetchPictures = () => {
    console.log('fetch');
    const { searchQuery, page } = this.state;
    const options = {
      searchQuery,
      page,
    };

    this.setState({
      isLoading: true,
    });

    fetchPictures(options)
      .then(hits => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...hits],
          page: prevState.page + 1,
        }));
        if (this.state.page > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  };

  setBigPictureUrl = e => {
    console.dir(e.target.dataset.big);
    this.setState({
      url: e.target.dataset.big,
    });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { pictures, isLoading, showModal, url } = this.state;
    const shouldRenederLoadMoreBtn = pictures.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.searchQueryChange} />
        <ImageGallery
          picturesData={pictures}
          showModal={this.toggleModal}
          setUrl={this.setBigPictureUrl}
        />

        {shouldRenederLoadMoreBtn && <Button onClick={this.fetchPictures} />}

        {isLoading && <Spinner />}

        {showModal && (
          <Modal modalClose={this.toggleModal} modalPicture={url} />
        )}
      </>
    );
  }
}

export default App;
