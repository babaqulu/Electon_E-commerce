
import React from 'react';
import { useState } from 'react'
import './App.css';
import Header from './component/header/Head'
import Footer from './component/footer/Footer'
import Home from './page/home/Home'
import AllCategories from './page/all-categories/AllCategories'
import Card from './common/cards/card/Card';

//Database
import products from './db/DataList'

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

  const [selectedCategory,setSelectedCategory] = useState(null);
  const [query,setQuery] = useState("");

  //--------- Input  FIlter ----------
  const handleInputChange = event => {
    setQuery(event.target.value)
  };

  const filteredItems = products.filter(product=>product.title.toLowerCase().indexOf(query.toLowerCase())) !== -1

  //--------- Radio  FIlter ----------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  };

  //--------- Buttons  FIlter ----------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }; 

  function filteredData(products,selected,query){
    let filteredProducts = products

    //filterin input items
    if(query){
      filteredProducts = filteredItems
    }

    //Selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({product})=>
        product.category===selected || 
        product.color === selected || 
        product.company===selected || 
        product.price===selected || 
        product.title===selected
        );
    }

    return filteredProducts.map(({img,title,price})=>(
      <Card
      key={Math.random()}
      img={img}
      title={title}
      price={price}
      />
    ))
  }

  const result = filteredData(products, selectedCategory, query)


  return (


    <div className="app">
      <Header query={query} handleChange={handleChange} handleInputChange={handleInputChange} />

      <Routes result={result} handleClick={handleClick} handleChange={handleChange} >
        <Router path="/" element={<Home handleClick={handleClick} />} />
        <Router path="/all-categories" element={<AllCategories result={result} handleClick={handleClick} handleChange={handleChange} />}/>
        <Router path="/product" element={<Product handleChange={handleChange}/>} />
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
