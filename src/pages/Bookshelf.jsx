import React from 'react';
import '../styles/bookshelf.scss';
import SearchImg from '../images/magnify.png';
import HarryCover from '../images/sorcerers_stone.jpeg';

const Bookshelf = () => {
    return (
        <div className="page__bookshelf">
<main className="main__bookshelf">
        <div className="main__searchwrapper">
            <form action="/" method="GET" className="main__form">
                <input type="text" placeholder="Search by Title/Author" className="main__search" />
                <img src={SearchImg} alt="Magnifying Glass" className="main__searchimg" />
            </form>
        </div>
        <h2 className="main__title">Release the Kraken of Knowledge!</h2>
        <section className="main__gridcontainer">
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
            <div className="grid__items grid__last">
                <img className="grid__bookcover" src={HarryCover} />
                <div className ="grid__title">Harry Potter and The Sorcerer's Stone</div>
                <div className="grid__author">J.K. Rowling</div>
            </div>
        </section>
    </main>
    </div>
    )
}
export default Bookshelf;