import PropTypes from 'prop-types';
import defaultImg from './default.jpeg';

const ImageGalleryItem = ({ src, dataUrl, alt, onClick }) => {
  const modalImage = () => onClick(dataUrl);
  return (
    <>
      <img
        src={src}
        alt={alt}
        data-url={dataUrl}
        className="ImageGalleryItem-image"
        onClick={modalImage}
      />
    </>
  );
};

ImageGalleryItem.defaultProps = {
  alt: 'Фото',
  webformatURL: defaultImg,
  largeImageURL: defaultImg,
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  dataUrl: PropTypes.string,
};

export default ImageGalleryItem;
