import React from 'react';
import '../CSS/Swiper.css';

const Movie =(props)=>{
  console.log(props)
  // const { image } = this.props
  // const movie = this.props.movies.filter(movie => movie.id === this.props.match.params.id)
    return(
        <div>
          <div className='info'>
              {/* <img src={ props.image } alt='image'/> */}
              <div>Movie</div>
          </div>
        </div>
    )
}

export default Movie;