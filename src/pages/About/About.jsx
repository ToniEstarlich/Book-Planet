import React from 'react';
import "./About.css";
import aboutImg from "../../images/About-books.jpg";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <>
        <Navbar />
        <section className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2>About</h2>
                </div>

                <div className='about-content grid'>
                    <div className='about-img'>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='about-text'>
                        <h2 className='about-title fs-26 ls-1'>About Book Planet</h2>
                        <p className='fs-17'>
                            Welcome to <strong>Book Planet</strong> — your gateway to a universe of stories. Whether you’re an avid reader or just discovering the joy of books, Book Planet is designed to help you explore new worlds, uncover hidden gems, and connect with a community of passionate readers.
                        </p>
                        <p className='fs-17'>
                            From science fiction to mystery, fantasy to non-fiction, our platform curates books from every genre. With our search and recommendation tools, you'll easily find your next great read. Step into Book Planet, where every book is a new adventure waiting to be discovered.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;
