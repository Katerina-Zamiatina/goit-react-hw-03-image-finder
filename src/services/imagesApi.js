import axios from 'axios';

const apiKey = '20391200-b9e8acd71c8c6c300b0440642';
const basicUrl = 'https://pixabay.com/api/';

const fetchImagesQuery = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `${basicUrl}?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`,
    )
    .then(response => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImagesQuery };
