import React, { Component } from 'react'
import axios from 'axios';

class UpcomingAPI extends Component {
    state ={
        movies:[],
      }
    // static defaultProps ={
    //     key_API:'dd36eee247f144ba66fce886e88c3fa7',
    // }
      componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=dd36eee247f144ba66fce886e88c3fa7&language=en-US&page=1`)
          .then(res => {
            // console.log(res);
            const movies = res.data;
            this.setState({ movies });
          })
          
      }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UpcomingAPI;