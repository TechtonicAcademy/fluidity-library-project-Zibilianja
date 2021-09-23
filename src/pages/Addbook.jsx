import React from 'react';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { addBook } from '../utils/API';
import '../styles/addbook.scss';
import { FaStar } from 'react-icons/fa';

const Addbook = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const history = useHistory();
  const titleInput = useRef();
  const authorInput = useRef();
  const synopsisInput = useRef();
  const pageInput = useRef();
  const publishInput = useRef();
  

  const formSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value.trim();
    const author = authorInput.current.value.trim();
    const synopsis = synopsisInput.current.value.trim();
    const pages = pageInput.current.value.trim();
    const published = publishInput.current.value.trim();
    // const rating = ratingInput.current.value.trim();

    if (!title || !author) {
      return alert('You must include both a title and author to add a book!');
    }

    addBook({ title, author, synopsis, pages, published, rating })
      .then(() => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="body__addbook">
      <main className="addbook">
        <h1 className="addbook__title">Add Book</h1>
        <form className="addbook__form" onSubmit={formSubmit}>
          <div className="form__left">
            <div className="form__wrappers">
              <label className="form__labels">Title</label>
              <input
                type="text"
                className="form__input form__title"
                ref={titleInput}
              />
            </div>
            <div className="form__wrappers author__wrapper">
              <label className="form__labels label__author">Author</label>
              <input
                type="text"
                className="form__input form__author"
                ref={authorInput}
              />
            </div>
            <div className="form__wrappers synopsis__wrapper">
              <label className="form__labels label__synopsis">Synopsis</label>
              <textarea
                type="text"
                className="form__input form__synopsis"
                ref={synopsisInput}
              ></textarea>
            </div>
            <div className="input__smaller">
              <div className="form__wrappers wrappers__sidebyside published__wrapper">
                <label className="form__labels">Published</label>
                <input
                  type="date"
                  className="form__input form__published"
                  ref={publishInput}
                />
              </div>

              <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                <label className="form__labels">Pages</label>
                <input
                  type="number"
                  className="form__input form__pages"
                  ref={pageInput}
                />
              </div>
            </div>
            <div className="form__wrappers rating__wrapper">
              <label className="label__rating">Rating</label>
              <div className="form__rating">
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
              color={ratingValue <= (hover || rating) ? "gold" : "grey"}
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
          <div className="form__right">
            <div className="image__frame">Add Image</div>
            <img />
            <button className="image__upload">Add Image</button>
          </div>
          <div className="addbook__btnwrap">
            <button type="submit" className="addbook__button button--dark">
              Add Book
            </button>
            <button className="addbook__button" type="reset">Cancel</button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Addbook;
