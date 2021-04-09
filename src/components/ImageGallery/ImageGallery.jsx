import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ list, onClick }) => (
  <ul className="ImageGallery" onClick={onClick}>
    {list.map(image => {
      console.log('URL', image.webformatURL);
      console.log('TAG', image.tags);
      console.log('MODAL', image.largeImageUrl);
      return (
        <li key={image.id} className="ImageGalleryItem">
          <ImageGalleryItem
            src={image.webformatURL}
            alt={image.tags}
            dataUrl={image.webformatURL}
          />
        </li>
      );
    })}
  </ul>
);

export default ImageGallery;
