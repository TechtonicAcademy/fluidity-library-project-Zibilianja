import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/details.scss';
import { FaStar } from 'react-icons/fa';
import Book1 from '../images/sorcerers_stone.jpeg';
import Book2 from '../images/chamberofsecrets.jpeg';
import Book3 from '../images/prisoner.jpeg';
import Book4 from '../images/goblet.jpeg';
import Book5 from '../images/phoenix.jpeg';
import Book6 from '../images/halfblood.jpeg';
import Book7 from '../images/deathlyhallows.jpeg';
import { getBook } from '../utils/API.js';

const Bookdetails = () => {
  const coversObject = { Book1, Book2, Book3, Book4, Book5, Book6, Book7 };
  const [
    { title, author, image, published, synopsis, pages, rating },
    setBook,
  ] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBook(id)
      .then(({ data: book }) => setBook(book))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="page__details">
      <main className="main__detail">
        <section className="main__detailcard">
          <div className="main__coverwrap">
            <h2 className="book__title--mobile">{title}</h2>
            <img src={coversObject[image]} className="book__cover" />
            <h3 className="author__mobile">{author}</h3>
            <div className="book__stars">
              <h4 className="book__rating">Rating</h4>
              <div className="star__wrapper">
                <div className="form__rating">
                  {[...Array(5)].map((star, i) => {
                    let ratingValue = i + 1;
                    return (
                      <label>
                        <input
                          type="radio"
                          className="rating__radio"
                          value={ratingValue}
                          display="hidden"
                          onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                          className="fa fa-star star__rating"
                          color={
                            ratingValue <= rating ? 'gold' : 'grey'
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <section className="book__details">
            <h2 className="book__title">{title}</h2>
            <h3 className="book__author">{author}</h3>
            <p className="details">
              <i>Published: {published}</i>
            </p>
            <p className="details">
              <i>{pages} pages</i>
            </p>
            <p className="book__description">{synopsis}</p>
          </section>
          <div className="main__btnwrap">
            <NavLink to="/editbook" className="edit__link">
              <button className="main__button button--dark">
                Edit This Book
              </button>
            </NavLink>
            <NavLink to="/bookshelf" className="shelf__link">
              <button className="main__button">Back to Shelf</button>
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Bookdetails;
