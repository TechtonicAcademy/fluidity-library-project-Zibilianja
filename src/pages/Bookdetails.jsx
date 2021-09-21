import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/details.scss';
import HarryCover from '../images/sorcerers_stone.jpeg';

const Bookdetails = () => {
    return (
        <div className="page__details">
        <main className="main__detail">
        <section className="main__detailcard">
            <div className="main__coverwrap">
                <h2 className ="book__title--mobile">Harry Potter and The Sorcerer's Stone</h2>
                <img src={HarryCover} className="book__cover" />
                <h3 className="author__mobile">J.K. Rowling</h3>
                <div className="book__stars">
                    <h4 className="book__rating">Rating:</h4>
                    <div className="star__wrapper">
                    <i className="fa fa-star star1"></i>
                    <i className="fa fa-star star2"></i>
                    <i className="fa fa-star star3"></i>
                    <i className="fa fa-star star4"></i>
                    <i className="fa fa-star star5"></i>
                    </div>
                </div>
            </div>
            <section className="book__details">
                <h2 className="book__title">Harry Potter and The Sorcerer's Stone</h2>
                <h3 className="book__author">J.K. Rowling</h3>
                <p className="details"><i>Published: June 26, 1997</i></p>
                <p className="details"><i>223 pages</i></p>
                <p className="book__description">Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright.</p>
            </section>
            <div className="main__btnwrap">
            <NavLink to="/editbook" className="edit__link"><button className="main__button button--dark">Edit This Book</button></NavLink>
            <NavLink to="/bookshelf" className="shelf__link"><button className="main__button">Back to Shelf</button></NavLink>
            </div>
        </section>
        
    </main>
    </div>
    )
}
export default Bookdetails;
