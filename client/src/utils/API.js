import axios from 'axios';
const host = 'http://localhost:8080/api/books'

export const getBooks = () => {
  return axios.get(`${host}`);
};

export const getBook = (id) => {
  return axios.get(`${host}/${id}`);
};

export const editBook = (id, book) => {
  return axios.put(`${host}/${id}`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const searchBooks = (query) => {
  return axios.get(`${host}/search?query=${query}`);
};

export const deleteBook = (id) => {
  return axios.delete(`${host}/${id}`);
};

export const addBook = (book) => {
  return axios.post(`${host}/addbook`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
