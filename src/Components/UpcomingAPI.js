import React, {Component} from 'react';
import axios from 'axios';

class UpcomingAPI extends Component {
    constructor(props){
        super(props);

        this.state = {
            upcomingMovies: []
        }
    }

    upcomingHandler(e){
        e.preventDefault();

        const key =' dd36eee247f144ba66fce886e88c3fa7';
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
        .then(res => {
            console.log(res);
            this.setState({upcomingMovies: res.data});
        });
    }
    render(){
        return(
            <section upcomingMovies={this.state.upcomingMovies} />
        )
    }
}
export default UpcomingAPI;