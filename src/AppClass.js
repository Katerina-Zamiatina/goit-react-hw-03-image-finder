import { PureComponent } from 'react';
import Loader from 'react-loader-spinner';

import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import Button from './components/Button';

import imagesApi from './services/imagesApi';

class App extends PureComponent {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    modalImgUrl: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      isLoading: false,
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };
    this.setState({ isLoading: true });
    imagesApi
      .fetchImagesQuery(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        this.scrollToLoadBtn();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  openModal = largeImgUrl => {
    this.setState({
      modalImgUrl: largeImgUrl,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalImgUrl: '',
      showModal: false,
    });
  };

  scrollToLoadBtn = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, error, showModal, modalImgUrl } = this.state;
    const shouldRenderBtn = images.length > 0 && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <p>Something went wrong: {error.message}</p>}

        <ImageGallery images={images} onClick={this.openModal} />
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={modalImgUrl} alt="" />
          </Modal>
        )}
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {shouldRenderBtn && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
