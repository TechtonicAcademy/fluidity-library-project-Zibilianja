import React from 'react';
import '../styles/editbook.scss';
import HarryCover from '../images/sorcerers_stone.jpeg';


const Editbook = () => {
    return (
        <div className="edit__page">
            <main className="edit__main">
        <h1 className="edit__title">Edit Book</h1>
        <form className="edit__form">
            <div className="form__left">
                <div className="form__wrappers">
                    <label className="form__labels">Title</label>
                    <input type="text" className="form__input form__title" placeholder="Harry Potter and the Sorcerer's Stone" />
                </div>
                <div className="form__wrappers author__wrapper">
                    <label className="form__labels">Author</label>
                    <input type="text" className="form__input form__author" placeholder="J.K. Rowling" />
                </div>
                <div className="form__wrappers synopsis__wrapper">
                    <label className="form__labels">Synopsis</label>
                    <textarea type="text" className="form__input form__synopsis" placeholder="Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright."></textarea>
                </div>
                <div className="input__smaller">
                    <div className="form__wrappers wrappers__sidebyside published__wrapper">
                        <label className="form__labels">Published</label>
                        <input type="text" className="form__input form__published" placeholder="6/26/1997" />
                    </div>
            
                    <div className="form__wrappers wrappers__sidebyside pages__wrapper">
                        <label className="form__labels">Pages</label>
                        <input type="number" className="form__input form__pages" placeholder="223" />
                    </div>
                </div>
                <div className="form__wrappers rating__wrapper">
                    <label className="label__rating">Rating</label>
                    <div className="form__rating">
                        <i className="fa fa-star star__rating"></i>
                        <i className="fa fa-star star__rating"></i>
                        <i className="fa fa-star star__rating"></i>
                        <i className="fa fa-star star__rating"></i>
                        <i className="fa fa-star star__rating star5"></i>
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
                <input type="button" className="edit__button button--dark" value="Submit" />
                <input type="button" className="edit__button" value="Cancel" />
            </div>
        </form>
    </main>
        </div>
    )
}
export default Editbook;