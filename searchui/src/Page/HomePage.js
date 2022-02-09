import React from 'react';
import Footer from './Footer';
import './HomePage.css';
import Search from './Search';


function HomePage(props) {
    return (
        <div>
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-5 text-center'>
                        <img
                            className="image_title"
                            src="assets/images/Elephant.png"
                            alt="Elephant"
                        >
                        </img>
                    </div>
                </div>
                <div className='row text_title'>
                    <div className='col-12 text-center'>
                        {/* <p>The free-to-use legal search engine</p> */}
                        <p>Legal search engine for the Singapore community</p>
                    </div>
                </div>
                <Search />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;