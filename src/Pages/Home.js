import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import Btns from '../Components/Btns';
import Section from '../Components/Section';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
// import {Link} from 'react-router-dom';

import '../CSS/Home.css';
class Home extends Component {
    render(){
        console.log(this.props)
        return(
            <div className='Home'>
                <Navbar />
                <Showcase />
                <Btns />
                {/* <Link to={`/movie/${movie.id}`}> Matias*/}
                <div className='gSection-container'>
                    {/* <Test /> */}
                    <Section sTitle='upcoming'/>
                    <Section sTitle='Popular'/>
                    <Section sTitle='now playing'/> 
                    <Section sTitle='top rated'/>
                    <ContactUs />>
                </div>
                {/* </Link> */}
                <Footer />
            </div>
        )
    }
}

export default Home;