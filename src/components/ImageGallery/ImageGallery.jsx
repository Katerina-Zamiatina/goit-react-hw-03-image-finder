import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <li key={image.id} className="ImageGalleryItem">
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          onClick={onClick}
          dataUrl={image.largeImageURL}
        />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
