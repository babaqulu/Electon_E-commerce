import React from 'react'
import './mainSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function mainSection() {
  
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return `<span class=" ${className} "> 
      <div className='circles'>

      <span className='circle1' ></span>
      <span className='circle2 circle' ></span>
      <span className='circle3 circle' ></span>

    </div>
      </span>`;
    },
  };
  return (
    <div >



      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mainSwiper"
      >
        <SwiperSlide>
        <main className='main'>

        <div className='leftSide'>

        <div className='headerButton'>

        <h1>Canon <br /> Camera</h1>

        <div className='buttonsContainer'>

          <button className='shopButton' >Shop now</button>
          <button className='viewButton' >View  more</button>

        </div>

        </div>

        </div>

        <div className='rightSide'>

          

        <div className='rightSideCircle'>

          <p>only <br /> $89</p>

        </div>

        <img src={require("../../img/fotoaparat.png")} />

        </div>

        </main>
        </SwiperSlide>
        <SwiperSlide>
        <main className='main'>

        <div className='leftSide'>

        <div className='headerButton'>

        <h1>Feel <br /> Music</h1>

        <div className='buttonsContainer'>

          <button className='shopButton' >Shop now</button>
          <button className='viewButton' >View  more</button>

        </div>

        </div>


        </div>

        <div className='rightSide'>

        <div className='rightSideCircle'>

          <p>only <br /> $189</p>

        </div>

        <img src={require("../../img/doubleSpeaker.png")} />

        </div>

        </main>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}
