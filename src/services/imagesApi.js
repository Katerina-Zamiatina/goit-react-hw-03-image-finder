import axios from 'axios';

const API_KEY = '20391200-b9e8acd71c8c6c300b0440642';
const BASE_URL = 'https://pixabay.com/api/';

// НЕ РАБОТАЕТ???
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// const fetchImagesQuery = async ( searchQuery, currentPage ) => {
//   try {
//     const { data } = await axios.get('', {
//       params: { searchQuery, currentPage },
//     });
//     console.log((data.hits));
//     return data.hits;
//   } catch (error) {
//     console.log('error', { error });
//     return [];
//   }
// };

const fetchImagesQuery = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`,
    )
    .then(response => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImagesQuery };
