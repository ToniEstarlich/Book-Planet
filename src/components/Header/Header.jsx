import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Footer from '../Footer/Footer';
{/*import SearchForm from './SearchForm'; // Adjust path based on actual location*/}


const Header = () => {
    return(
        <>
            <div className='holder'>
                <header className='header'>
                    <Navbar />
                    <div className='header-content flex flex-c text-center text-white'>
                        <h1 className='header-title text-capitalize'>Explore the Universe of Books.</h1>
                        <h2 className='header-text fs-18 fw-3'>Discover your next favorite read from a galaxy of genres. Search, explore, and dive into a world where every book is a new adventure waiting to be found.</h2>
                        {/*<SearchForm />*/}
                    </div>
                    <Footer />
                </header>
            </div>
        </>
    
    )
}

export default Header 
