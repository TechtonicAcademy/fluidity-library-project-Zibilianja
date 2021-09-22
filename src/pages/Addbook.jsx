import React from 'react';
import '../styles/addbook.scss';

const Addbook = () => {
  return (
    <div className="body__addbook">
      <main className="addbook">
        <h1 className="addbook__title">Add Book</h1>
        <form className="addbook__form">
          <div className="form__left">
            <div className="form__wrappers">
              <label className="form__labels">Title</label>
              <input type="text" className="form__input form__title" />
            </div>
            <div className="form__wrappers author__wrapper">
              <label className="form__labels label__author">Author</label>
              <input type="text" className="form__input form__author" />
            </div>
            <div className="form__wrappers synopsis__wrapper">
              <label className="form__labels label__synopsis">Synopsis</label>
              <textarea
                type="text"
                className="form__input form__synopsis"
              ></textarea>
            </div>
            <div className="input__smaller">
              <div className="form__wrappers wrappers__sidebyside published__wrapper">
                <label className="form__labels">Published</label>
                <input type="text" className="form__input form__published" />
              </div>

              <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                <label className="form__labels">Pages</label>
                <input type="number" className="form__input form__pages" />
              </div>
            </div>
            <div className="form__wrappers rating__wrapper">
              <label className="label__rating">Rating</label>
              <div className="form__rating">
                <i className="fa fa-star star__rating"></i>
                <i className="fa fa-star star__rating"></i>
                <i className="fa fa-star star__rating"></i>
                <i className="fa fa-star star__rating"></i>
                <i className="fa fa-star star__rating"></i>
              </div>
            </div>
          </div>
          <div className="form__right">
            <div className="image__frame">Add Image</div>
            <img />
            <button className="image__upload">Add Image</button>
          </div>
          <div className="addbook__btnwrap">
            <input
              type="button"
              className="addbook__button button--dark"
              value="Add Book"
            />
            <input type="button" className="addbook__button" value="Cancel" />
          </div>
        </form>
      </main>
    </div>
  );
};
export default Addbook;
