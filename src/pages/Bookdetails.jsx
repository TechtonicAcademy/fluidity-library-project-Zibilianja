import React, { useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/details.scss';
import Book1 from '../images/sorcerers_stone.jpeg';
import Book2 from '../images/chamberofsecrets.jpeg';
import Book3 from '../images/prisoner.jpeg';
import Book4 from '../images/goblet.jpeg';
import Book5 from '../images/phoenix.jpeg';
import Book6 from '../images/halfblood.jpeg';
import Book7 from '../images/deathlyhallows.jpeg';
import { getBook } from '../utils/API.js';


const Bookdetails = () => {
    const coversObject = {Book1, Book2, Book3, Book4, Book5, Book6, Book7};
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getBook(id)
            .then(({ data: book }) => setBook(book))
            .catch((err) => console.log(err));
    }, [id])

    console.log(book);
    return (
        <div className="page__details">
        <main className="main__detail">
        <section className="main__detailcard">
            <div className="main__coverwrap">
                <h2 className ="book__title--mobile">{book.title}</h2>
                <img src={coversObject[book.image]} className="book__cover" />
                <h3 className="author__mobile">{book.author}</h3>
                <div className="book__stars">
                    <h4 className="book__rating">Rating</h4>
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
                <h2 className="book__title">{book.title}</h2>
                <h3 className="book__author">{book.author}</h3>
                <p className="details"><i>Published: {book.published}</i></p>
                <p className="details"><i>{book.pages} pages</i></p>
                <p className="book__description">{book.synopsis}</p>
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
