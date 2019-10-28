import React from 'react';
import '../CSS/Swiper.css';

const Movie =(props)=>{
  // const { image } = this.props
    return(
        <div>
          <div className='info'>
              <img src={ props.image } alt='image'/>
          </div>
        </div>
    )
}

export default Movie;