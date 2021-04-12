import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import Button from './components/Button';

import imagesApi from './services/imagesApi';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImgUrl, setModalImgUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const hits = await imagesApi.fetchImagesQuery(searchQuery, currentPage);

        setImages(prevImages => [...prevImages, ...hits]);

        if (currentPage !== 1) {
          scrollToLoadBtn();
        }
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, currentPage]);

  const updatePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    setModalImgUrl('');
    setCurrentPage(1);
    setImages([]);
    setShowModal(false);
    setIsLoading(false);
    setError(null);
  };

  const openModal = largeImgUrl => {
    setModalImgUrl(largeImgUrl);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const scrollToLoadBtn = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const shouldRenderBtn = images.length > 0 && !isLoading;

  return (
    <div className="App">
      <Searchbar onSubmit={onChangeQuery} />
      {error && <p>Something went wrong: {error.message}</p>}
      <ImageGallery images={images} onClick={openModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
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
      {shouldRenderBtn && <Button onClick={updatePage} />}
    </div>
  );
};

export default App;
