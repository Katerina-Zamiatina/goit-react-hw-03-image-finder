const ImageGalleryItem = ({ url, dataUrl, tags }) => (
  <li className="ImageGalleryItem">
    <img
      src={url}
      alt={tags}
      data-url={dataUrl}
      className="ImageGalleryItem-image"
    />
  </li>
);

export default ImageGalleryItem;
