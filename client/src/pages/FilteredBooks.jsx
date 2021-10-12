import React, { useState, useEffect } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import '../styles/bookshelf.scss';
import SearchImg from '../images/magnify.png';
import { getBooks, searchBooks } from '../utils/API';

const FilteredBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const { query } = useParams();
  const history = useHistory();

  useEffect(() => {
    searchBooks(query)
      .then(({ data: books }) => {
        setFilteredBooks(books);
      })
      .catch((err) => console.log(err));
  }, [query]);

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
        <NavLink to="/bookshelf">
          <button className="clear__button">Clear Search</button>
        </NavLink>
        <section className="main__gridcontainer">
          {filteredBooks.map(({ id, title, image, author }) => (
            <div className="grid__items">
              <NavLink to={'/bookdetails/' + id} className="book__link">
                <img className="grid__bookcover" src={image} />
                <div className="grid__title">{title}</div>
                <div className="grid__author">{author}</div>
              </NavLink>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
export default FilteredBooks;
