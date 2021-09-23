import axios from 'axios';

export const getBooks = () => {
  return axios.get('http://localhost:3000/books');
};

export const getBook = (id) => {
  return axios.get(`http://localhost:3000/books/${id}`);
};

export const addBook = (book) => {
  return axios.post('http://localhost:3000/books', book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
