import React, { Component }from 'react';
import '../CSS/Navbar.css';
import logo from '../img/logo.png';
import './UpcomingAPI';

class Navbar extends Component{
    render(){
        return(
            <div className='Navbar-container'>
            <div className='Navbar'>
                <div className='logo'><a href='/'><img src={logo} alt='logo'/></a></div>
                <div className='search-bar'>
                    <span><i className="fas fa-search"></i></span>
                        <input type='text' placeholder='Search...' onChange={this.props.changeHandler} onSubmit= {this.props.submitHandler}></input>
                </div>
                <nav>
                    <ul>
                        <div className='right-side'>
                            <li><a href='/'><i className="fas fa-home"></i></a></li>
                            <li><a href='/login'><i className="fas fa-user"></i></a></li>
                            <li><a href='/search'><i className="fas fa-search"></i></a></li>                
                        </div>
                    </ul>
                </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;

