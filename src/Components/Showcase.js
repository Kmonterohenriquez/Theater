import React, {Component} from 'react';
import '../CSS/Showcase.css';
import Wallpaper from '../img/avenger.jpg';

class Showcase extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieName: 'Avengers',
            category: 'Action',
            rating: 6.5
        };
    }
    render(){
        return(
            <div className='Showcase-container'>
                <img src={Wallpaper} alt={this.state.movieName}/>
                <div className='movieInfo'>
                    <h2>LATEST</h2>
                    <h2 className='title'>{this.state.movieName}</h2>
                    <h2>{this.state.category} | {this.state.rating} Rating</h2>
                </div>
            </div>
        )
    }
}
 export default Showcase;