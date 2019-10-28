import React, {Component} from 'react';
import LoginForm from '../Components/LoginForm';
import Navbar from '../Components/Navbar';
import '../CSS/Login.css';
class Login extends Component {
    render(){
        return(
            <div className='Login-container'>
                <Navbar />
                <div className='Login-bg'>
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default Login;
