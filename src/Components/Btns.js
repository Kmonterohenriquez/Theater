import React, {Component} from 'react';
import '../CSS/Btns.css';
// import axios from 'axios';

class Btns extends Component {
    
    render(){
        return(
            <div className= 'Btn-container'>
                <div className='Btn container'>
                    <button> Movies</button>
                    <button> Tv Shows</button>
                </div>
            </div>    
        )
    }
}

export default Btns;