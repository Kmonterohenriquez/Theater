import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import '../CSS/Swiper.css';
import '../Components/UpcomingAPI';
// import Movie from '../Components/Movie';
// import axios from 'axios';
 
class Section extends Component {
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
      <div>
      {/* <Swiper
        
          <div className="swiper-slide">
            <img src='http://lorempixel.com/210/117/' alt='img'/>
            <div className='info'>
              <h4>{movie}</h4>
              <p>{description}</p>
            </div>
          </div>
          
          
        </Swiper>  */}
        </div>
      


    )
 }
}
 
export default Section;