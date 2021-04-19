import axios from 'axios';

const key = '20332919-ce65cd39cf390118f4ce6de3e';

const fetchPictures = ({ searchQuery = '', page = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(({ data }) => data.hits);
};

export default fetchPictures;
