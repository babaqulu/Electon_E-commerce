import React from 'react'
import './Card.css';
import AddCart from '../addCartButton/addCart'
import products from '../../../db/DataList'

import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
  import Routes from '../../../router/Routes.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Card({img, title, dataprice}) {
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
        className="mySwiper"
      >
        <SwiperSlide>

        <Link to='/product'>

        <div className='cardWrapper'>

<div className='upperSide'>

<img className='heroImg' src={img} />

<div className='heartCircle'>
  
<img src={require("../../../img/blackheart.png")} />

</div>

</div>


<div className='addCartWrapper'>

    <AddCart />

    </div>


<div className='priceInfo'>

  <h1>{title}</h1>
  <p>{dataprice}</p>

<img className='stars' src={require("../../../img/stars.png")} />

</div>


</div>

        </Link>


      </SwiperSlide>   
  
      </Swiper>

  )
}
