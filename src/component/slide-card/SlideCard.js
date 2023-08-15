import React from 'react'
import './SlideCard.css';
import AddCart from '../../common/cards/addCartButton/addCart'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function SlideCard() {

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

    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="slideSwiper"
      >
        <SwiperSlide>
        <div className='slideCardWrapper'>

<div className='sidesWrapper'>

<div className='leftSide'>

<img src={require("../../img/doubleSpeaker.png")} />



</div>

<div className='rightSide'>

<div className='productInfo'>

<h1>JBL bar 2.1 deep bass</h1>
<p>$11.70</p>

<img className='stars' src={require("../../img/stars.png")} />

</div>

<div className='productNums'>


<span><p>57</p></span>
<span><p>11</p></span>
<span><p>33</p></span>
<span><p>59</p></span>

</div>

<div className='productButtons'>

<AddCart />

</div>


</div>

</div>

</div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='slideCardWrapper'>

<div className='sidesWrapper'>

<div className='leftSide'>

<img src={require("../../img/doubleSpeaker.png")} />



</div>

<div className='rightSide'>

<div className='productInfo'>

<h1>JBL bar 2.1 deep bass</h1>
<p>$11.70</p>

<img className='stars' src={require("../../img/stars.png")} />

</div>

<div className='productNums'>


<span><p>57</p></span>
<span><p>11</p></span>
<span><p>33</p></span>
<span><p>59</p></span>

</div>

<div className='productButtons'>

<AddCart />

</div>


</div>

</div>

</div>
        </SwiperSlide>

    </Swiper>

  )
}
