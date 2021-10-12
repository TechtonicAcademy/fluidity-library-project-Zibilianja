import axios from 'axios';
const host = 'http://localhost:8080/'

export const getBooks = () => {
  return axios.get(`${host}api/books`);
};

export const getBook = (id) => {
  return axios.get(`${host}api/books/${id}`);
};

export const editBook = (id, book) => {
  return axios.put(`${host}api/books/${id}`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const searchBooks = (query) => {
  return axios.get(`${host}api/books/search?query=${query}`);
};

export const deleteBook = (id) => {
  return axios.delete(`${host}api/books/${id}`);
};

export const addBook = (book) => {
  return axios.post(`${host}api/books/addbook`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
