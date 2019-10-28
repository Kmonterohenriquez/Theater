import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Showcase from '../Components/Showcase';
import Btns from '../Components/Btns';
import Section from '../Components/Section';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

import '../CSS/Home.css';
class Home extends Component {
    render(){
        return(
            <div className='Home'>
                <Navbar />
                <Showcase />
                <Btns />
                <div className='gSection-container'>
                    {/* <Test /> */}
                    <Section sTitle='upcoming'/>
                    <Section sTitle='Popular'/>
                    <Section sTitle='now playing'/> 
                    <Section sTitle='top rated'/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;