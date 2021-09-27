import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { addBook } from '../utils/API';
import '../styles/addbook.scss';
import { FaStar } from 'react-icons/fa';
import Rating from '../components/Rating';

const Addbook = () => {
  const [rating, setRating] = useState(null);
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
              <label htmlFor="title" className="form__labels">Title
              <input
              id="title"
                type="text"
                className="form__input form__title"
                ref={titleInput}
              />
              </label>
            </div>
            <div className="form__wrappers author__wrapper">
              <label htmlFor="author" className="form__labels label__author">Author
              <input
              id="author"
                type="text"
                className="form__input form__author"
                ref={authorInput}
              />
              </label>
            </div>
            
            <div className="form__wrappers synopsis__wrapper">
              <label htmlFor="synopsis" className="form__labels label__synopsis">Synopsis
              <textarea
              id="synopsis"
                type="text"
                className="form__input form__synopsis"
                ref={synopsisInput}
              ></textarea>
              </label>
            </div>
            <div className="input__smaller">
              <div className="form__wrappers wrappers__sidebyside published__wrapper">
                <label htmlFor="publish" className="form__labels">Published
                <input
                  id="publish"
                  type="date"
                  className="form__input form__published"
                  ref={publishInput}
                />
                </label>
              </div>

              <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                <label htmlFor="pages" className="form__labels">Pages
                <input
                  id="pages"
                  type="number"
                  className="form__input form__pages"
                  ref={pageInput}
                />
                </label>
              </div>
            </div>
            <div className="form__wrappers rating__wrapper">
              <label htmlFor="rating" className="label__rating">Rating
              <Rating changeRating={rating => setRating(rating)} currentRating={() => {return 0}}/>
              </label>
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
            <button className="addbook__button" type="reset">
              <NavLink to={"/bookshelf"} className="NavCancel"> 
              Cancel
              </NavLink>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Addbook;
