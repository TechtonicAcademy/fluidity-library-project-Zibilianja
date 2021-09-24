import React, { useState, useEffect, useRef } from 'react';
import useParams from 'react-router-dom';
import { useHistory } from 'react-router';
import '../styles/editbook.scss';
import { getBook, editBook } from '../utils/API';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';
import Book1 from '../images/sorcerers_stone.jpeg';
import Book2 from '../images/chamberofsecrets.jpeg';
import Book3 from '../images/prisoner.jpeg';
import Book4 from '../images/goblet.jpeg';
import Book5 from '../images/phoenix.jpeg';
import Book6 from '../images/halfblood.jpeg';
import Book7 from '../images/deathlyhallows.jpeg';

const Editbook = () => {
  const coversObject = { Book1, Book2, Book3, Book4, Book5, Book6, Book7 };
  const [
    { title, author, image, published, synopsis, pages, rating },
    setBook,
  ] = useState({});
  const { id } = useParams();

  const [ratingStar, setRating] = useState(rating);
  const [hover, setHover] = useState(null);
  const [{ titleInput, authorInput, publishInput, pageInput, synopsisInput, ratingInput }, setInput] = useState({})

  useEffect(() => {
    getBook(id)
      .then(({ data: book }) => setBook(book))
      .catch((err) => console.log(err));
  }, [id]);

  
    

  const formSubmit = (e) => {
    e.preventDefault();
    

    if (!title || !author) {
      return alert('You must include both a title and author!');
    }

    editBook( id, { title, author, synopsis, pages, published, rating })
    .then(() => history.push('/bookshelf'))
    .catch((err) => console.log(err));
};

  return (
    <div className="edit__page">
      <main className="edit__main">
        <h1 className="edit__title">Edit Book</h1>
        <form className="edit__form" onSubmit={formSubmit}>
          <div className="form__left">
            <div className="form__wrappers">
              <label className="form__labels">Title</label>
              <input
                type="text"
                className="form__input form__title"
                placeholder={title}
                ref={titleInput}
              />
            </div>
            <div className="form__wrappers author__wrapper">
              <label className="form__labels">Author</label>
              <input
                type="text"
                className="form__input form__author"
                placeholder={author}

                ref={authorInput}
              />
            </div>
            <div className="form__wrappers synopsis__wrapper">
              <label className="form__labels">Synopsis</label>
              <textarea
                type="text"
                className="form__input form__synopsis"
                placeholder={synopsis}
                ref={synopsisInput}
                              ></textarea>
            </div>
            <div className="input__smaller">
              <div className="form__wrappers wrappers__sidebyside published__wrapper">
                <label className="form__labels">Published</label>
                <input
                  type="text"
                  className="form__input form__published"
                  placeholder={published}
                  ref={publishInput}
                />
              </div>

              <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                <label className="form__labels">Pages</label>
                <input
                  type="number"
                  className="form__input form__pages"
                  placeholder={pages}
                  ref={pageInput}
                />
              </div>
            </div>
            <div className="form__wrappers rating__wrapper">
              <label className="label__rating">Rating</label>
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
                          ratingValue <= (hover || rating)? 'gold' : 'grey'
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
          <div className="form__right">
            <div className="image__frame">
              <img src={coversObject[image]} className="book__cover" />
            </div>
            <button className="image__upload">Change Image</button>
          </div>
          <div className="edit__btnwrap">
          <button type="submit" className="addbook__button button--dark">
              Submit
            </button>
            <button className="addbook__button" type="reset">
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Editbook;
