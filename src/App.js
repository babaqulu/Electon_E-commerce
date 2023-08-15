
import React from 'react';

import './App.css';
import Header from './component/header/Head'
import Footer from './component/footer/Footer'
import Home from './page/home/Home'
import AllCategories from './page/all-categories/AllCategories'
import Card from './common/cards/card/Card';

import Product from './page/product/Product'
import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
  import Routes from './router/Routes.js'
  import { Swiper, SwiperSlide } from 'swiper/react';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  
  
  // import required modules
  import { FreeMode, Pagination } from 'swiper/modules';

function App() {

  return (


    <div className="app">
      <Header />

      <Routes>
        <Router path="/" element={<Home />} />
        <Router path="/all-categories" element={<AllCategories />}/>
        <Router path="/product" element={<Product />} />
      </Routes>

      <Footer />
      
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>        <Card link={require('../src/img/fotoaparat.png')} header='Cannon Camera' price='$11,70' /> </SwiperSlide>
        <SwiperSlide><Card link={require('../src/img/fotoaparat.png')} header='Cannon Camera' price='$11,70' /></SwiperSlide>
        <SwiperSlide><Card link={require('../src/img/fotoaparat.png')} header='Cannon Camera' price='$11,70' /></SwiperSlide>
        <SwiperSlide><Card link={require('../src/img/fotoaparat.png')} header='Cannon Camera' price='$11,70' /></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

    </div>
  );
}

export default App;
