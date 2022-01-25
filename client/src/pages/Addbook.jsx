import { NavLink, useHistory } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import { addBook } from '../utils/API';
import '../styles/addbook.scss';
import { FaStar } from 'react-icons/fa';

const Addbook = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const history = useHistory();
  const titleInput = useRef();
  const authorInput = useRef();
  const synopsisInput = useRef();
  const pageInput = useRef();
  const publishInput = useRef();
  const fileInput = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const formSubmit = (e) => {
    e.preventDefault();
    const title = titleInput.current.value.trim();
    const author = authorInput.current.value.trim();
    const synopsis = synopsisInput.current.value.trim();
    const pages = pageInput.current.value.trim();
    const published = publishInput.current.value.trim();
    const image = preview;

    if (!title || !author) {
      return alert('You must include both a title and author to add a book!');
    }

    addBook({ title, author, synopsis, pages, published, rating, image })
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
              <label htmlFor="title" className="form__labels">
                Title
                <input
                  id="title"
                  type="text"
                  className="form__input form__title"
                  ref={titleInput}
                />
              </label>
            </div>
            <div className="form__wrappers author__wrapper">
              <label htmlFor="author" className="form__labels label__author">
                Author
                <input
                  id="author"
                  type="text"
                  className="form__input form__author"
                  ref={authorInput}
                />
              </label>
            </div>

            <div className="form__wrappers synopsis__wrapper">
              <label
                htmlFor="synopsis"
                className="form__labels label__synopsis"
              >
                Synopsis
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
                <label htmlFor="publish" className="form__labels">
                  Published
                  <input
                    id="publish"
                    type="date"
                    className="form__input form__published"
                    ref={publishInput}
                  />
                </label>
              </div>

              <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                <label htmlFor="pages" className="form__labels">
                  Pages
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
              <label htmlFor="rating" className="label__rating">
                Rating
                <div id="rating" className="form__rating">
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
                            ratingValue <= (hover || rating) ? 'gold' : 'grey'
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
              </label>
            </div>
          </div>

          <div className="form__right">
            <div className="image__frame" ref={fileInput} onChange>
              {preview ? (
                <img className="upload__image" src={preview} />
              ) : (
                'Add Image'
              )}
            </div>

            <input
              style={{ display: 'none' }}
              type="file"
              accept="image/*"
              ref={fileInput}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.type.substr(0, 5) === 'image') {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
            <button
              className="image__upload"
              onClick={(e) => {
                setImage(null);
                e.preventDefault();
                fileInput.current.click();
              }}
            >
              Add Image
            </button>
          </div>
          <div className="addbook__btnwrap">
            <button type="submit" className="addbook__button button--dark">
              Add Book
            </button>
            <button className="addbook__button" type="reset">
              <NavLink to={'/bookshelf'} className="NavCancel">
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
