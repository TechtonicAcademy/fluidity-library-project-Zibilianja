import React, { useState } from 'react';
import '../styles/editbook.scss';
import HarryCover from '../images/sorcerers_stone.jpeg';
import Rating from '../components/Rating.jsx'
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Editbook = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="edit__page">
      <main className="edit__main">
        <h1 className="edit__title">Edit Book</h1>
        <form className="edit__form">
          <div className="form__left">
            <div className="form__wrappers">
              <label className="form__labels">Title</label>
              <input
                type="text"
                className="form__input form__title"
                placeholder="Harry Potter and the Sorcerer's Stone"
              />
            </div>
            <div className="form__wrappers author__wrapper">
              <label className="form__labels">Author</label>
              <input
                type="text"
                className="form__input form__author"
                placeholder="J.K. Rowling"
              />
            </div>
            <div className="form__wrappers synopsis__wrapper">
              <label className="form__labels">Synopsis</label>
              <textarea
                type="text"
                className="form__input form__synopsis"
                placeholder="Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright."
              ></textarea>
            </div>
            <div className="input__smaller">
              <div className="form__wrappers wrappers__sidebyside published__wrapper">
                <label className="form__labels">Published</label>
                <input
                  type="text"
                  className="form__input form__published"
                  placeholder="6/26/1997"
                />
              </div>

              <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                <label className="form__labels">Pages</label>
                <input
                  type="number"
                  className="form__input form__pages"
                  placeholder="223"
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
                          ratingValue <= (hover || rating) ? 'gold' : 'grey'
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
              <img src={HarryCover} className="book__cover" />
            </div>
            <button className="image__upload">Change Image</button>
          </div>
          <div className="edit__btnwrap">
            <input
              type="button"
              className="edit__button button--dark"
              value="Submit"
            />
            <input type="button" className="edit__button" value="Cancel" />
          </div>
        </form>
      </main>
    </div>
  );
};
export default Editbook;
