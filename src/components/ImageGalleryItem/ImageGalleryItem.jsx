import PropTypes from 'prop-types';
import defaultImg from './default.jpeg';

const ImageGalleryItem = ({ src, dataUrl, alt }) => (
  <>
    <img
      src={src}
      alt={alt}
      data-url={dataUrl}
      className="ImageGalleryItem-image"
    />
  </>
);

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
