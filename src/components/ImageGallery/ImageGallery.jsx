import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery" onClick={onClick}>
    {images.map(({ id, webformatURL, largeImageUrl, tags }) => (
      <ImageGalleryItem
        key={id}
        url={webformatURL}
        title={tags}
        dataUrl={largeImageUrl}
      />
    ))}
  </ul>
);

export default ImageGallery;
