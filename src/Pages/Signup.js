import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import SignupForm from '../Components/SignupForm';

class Signup extends Component{
    render() {
        return (
            <div className=''>
                <Navbar />
                <SignupForm />
            </div>
        )
    }
}

export default Signup;
