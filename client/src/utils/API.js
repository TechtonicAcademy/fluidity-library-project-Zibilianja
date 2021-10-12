import axios from 'axios';

export const getBooks = () => {
  return axios.get('http://localhost:8080/api/books');
};

export const getBook = (id) => {
  return axios.get(`http://localhost:8080/api/books/${id}`);
};

export const editBook = (id, book) => {
  return axios.put(`http://localhost:8080/api/books/${id}`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const searchBooks = (query) => {
  return axios.get(`http://localhost:8080/api/books/search`);
};

export const deleteBook = (id) => {
  return axios.delete(`http://localhost:8080/api/books/${id}`);
};

export const addBook = (book) => {
  return axios.post('http://localhost:8080/api/books/addbook', book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
