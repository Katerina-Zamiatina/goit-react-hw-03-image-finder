import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ list, onClick }) => (
  <ul className="ImageGallery" onClick={onClick}>
    {list.map(image => (
      <li key={image.id} className="ImageGalleryItem">
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          dataUrl={image.largeImageUrl}
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
