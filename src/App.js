import { PureComponent } from 'react';
// import { useState, useEffect, useRef } from 'react';
import ImageGallery from './components/ImageGallery';
import imagesApi from './services/imagesApi';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import Button from './components/Button';

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
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  openModal = e => {
    this.setState({
      modalImgUrl: e.target.dataset.url,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalImgUrl: '',
      showModal: false,
    });
  };

  render() {
    const { images, isLoading, error, showModal, modalImgUrl } = this.state;
    const shouldRenderBtn = images.length > 0 && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <p>Something went wrong: {error.message}</p>}

        <ImageGallery list={images} onClick={this.openModal} />
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={modalImgUrl} alt="" />
          </Modal>
        )}
        {isLoading && <p>Loading...</p>}
        {shouldRenderBtn && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [modalImgUrl, setModalImgUrl] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const usePrevious = value => {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   };

//   const prevQuery = usePrevious(searchQuery);

//   useEffect(() => {
//     if (prevQuery !== searchQuery) {
//       fetchImages();
//     }
//   });

//   const onChangeQuery = query => {
//     setSearchQuery(query);
//     setModalImgUrl('');
//     setCurrentPage(1);
//     setImages([]);
//     setShowModal(false);
//     setIsLoading(false);
//     setError(null);
//   };

//   const fetchImages = () => {
//     setIsLoading(true);

//     imagesApi
//       .fetchImagesQuery(searchQuery, currentPage)
//       .then(images => {
//         setImages(prevImages => [...prevImages, ...images]);
//         setCurrentPage(prevPage => prevPage + 1);
//         if (currentPage !== 1) {
//           scrollToLoadBtn();
//         }
//       })
//       .catch(error => setError({ error }))
//       .finally(setIsLoading(false));
//   };

//   const openModal = largeImgUrl => {
//     setModalImgUrl(largeImgUrl);
//     setShowModal(true);
//   };

//   const toggleModal = () => {
//     setShowModal(prev => !prev);
//   };

//   const scrollToLoadBtn = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   const shouldRenderBtn = images.length > 0 && !isLoading;

//   return (
//     <div className="App">
//       <Searchbar onSubmit={onChangeQuery} />
//       {error && <p>Something went wrong: {error.message}</p>}
//       <ImageGallery images={images} onClick={openModal} />
//       {showModal && (
//         <Modal onClose={toggleModal}>
//           <img src={modalImgUrl} alt="" />
//         </Modal>
//       )}
//       {isLoading && <p>Loading...</p>}
//       {shouldRenderBtn && <Button onClick={fetchImages} />}
//     </div>
//   );
// };

// export default App;
