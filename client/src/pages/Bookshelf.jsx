import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/bookshelf.scss';
import SearchImg from '../images/magnify.png';
import { getBooks } from '../utils/API.js';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    getBooks()
      .then(({ data: books }) => {
        console.log(books);
        setBooks(books);
      })
      .catch((err) => console.log(err));
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    if (!newQuery) {
      return alert('Must provide an author or title!');
    }

    getBooks()
      .then(() => history.push('/filtered/' + newQuery))
      .catch((err) => console.log(err));
  };

  const inputChange = (e) => {
    const { value } = e.target;
    setNewQuery(value);
  };

  return (
    <div className="page__bookshelf">
      <main className="main__bookshelf">
        <div className="main__searchwrapper">
          <form onSubmit={formSubmit} className="main__form">
            <input
              type="text"
              placeholder="Search by Title/Author"
              className="main__search"
              onChange={inputChange}
            />
            <button type="submit" className="search__button">
              <img
                src={SearchImg}
                alt="Magnifying Glass"
                className="main__searchimg"
              />
            </button>
          </form>
        </div>
        <h2 className="main__title">Release the Kraken of Knowledge!</h2>
        <section className="main__gridcontainer">
          {books.map(({ id, title, image, Author }) => (
            <div className="grid__items">
              <Link to={'/bookdetails/' + id} className="book__link">
                <img className="grid__bookcover" src={image} />
                <div className="grid__title">{title}</div>
                <div className="grid__author">{`${Author.first_name} ${Author.last_name}`}</div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
export default Bookshelf;
