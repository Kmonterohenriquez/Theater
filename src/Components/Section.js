import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import '../CSS/Swiper.css';
import '../Components/UpcomingAPI';
// import Movie from '../Components/Movie';
import axios from 'axios';
 
class Section extends Component {
  state={
    movies:[]
  }
  
  // function getMovies(){
  //   axios.get('').then(
  //     result =>(
  //       this.setState(
  //         {
  //           movies: result.data
  //         }
  //         )
  //     )
  //   )
  // }
 render(){ 
    const params = {
      slidesPerView: 7, //make this number resonsive according to the width of the windows
      spaceBetween: 110,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }
    const {movie, description} = this.props;
    return(
      
      <div className='container-l Section-container'>
        <div className='sTitle'> {this.props.sTitle} </div>
        <Swiper {...params}>
          <div className="swiper-slide">
            <img src='http://lorempixel.com/210/115/' alt='img'/>
            <div className='info'>
              <h4>{movie}</h4>
              <p>{description}</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src='http://lorempixel.com/210/116/' alt='img'/>
            <div className='info'>
              <h4>{movie}</h4>
              <p>{description}</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src='http://lorempixel.com/210/117/' alt='img'/>
            <div className='info'>
              <h4>{movie}</h4>
              <p>{description}</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src='http://lorempixel.com/210/118/' alt='img'/>
            <div className='info'>
              <h4>{movie}</h4>
              <p>{description}</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src='http://lorempixel.com/210/119/' alt='img'/>
            <div className='info'>
              <h4>{movie}</h4>
              <p>{description}</p>
            </div>
          </div>
        </Swiper> 
      </div>


    )
 }
 static defaultProps = {
    movie:'avenger',
    description: 'Primera movie', 
}
}
 
export default Section;