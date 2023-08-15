import React from 'react'

import './Home.css'
import Header from '../../component/header/Head'
import Main from '../../component/main/MainSection'
import CardLong from '../../common/cards/long/cardLong'
import Card from '../../common/cards/card/Card'
import WideCard from '../../common/cards/wideCard/WideCard'
import BannerLaptop from '../../component/banner/BannerLaptop'
import SlideCard from '../../component/slide-card/SlideCard'
import Advantages from '../../common/advantages/Advantages'
import PpCard from '../../common/cards/pp-card/PpCard'
import Logos from '../../component/logos/Logos'
import InfoCards from '../../common/cards/infoCards/InfoCards'
import Footer from '../../component/footer/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/navigation';

export default function Home() {
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

    <div className="home">

      <Main />

      <div className='body'>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="longCardsMySwiper"
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
        <div className='longCards'>
        
        <CardLong className='longCardMedia' link={require('../../img/speaker.png')} header='Speaker' num='(6 items)' />
        <CardLong link={require('../../img/desktop.png')} header='Desktop & laptop' num='(6 items)' />
        <CardLong link={require('../../img/littlefotoaparat.png')} header='DSLR camera' num='(6 items)' />
  
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='longCards'>
        
        <CardLong className='longCardMedia' link={require('../../img/speaker.png')} header='Speaker' num='(6 items)' />
        <CardLong link={require('../../img/desktop.png')} header='Desktop & laptop' num='(6 items)' />
        <CardLong link={require('../../img/littlefotoaparat.png')} header='DSLR camera' num='(6 items)' />
  
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='longCards'>
        
        <CardLong link={require('../../img/speaker.png')} header='Speaker' num='(6 items)' />
        <CardLong link={require('../../img/desktop.png')} header='Desktop & laptop' num='(6 items)' />
        <CardLong link={require('../../img/littlefotoaparat.png')} header='DSLR camera' num='(6 items)' />
  
        </div>
        </SwiperSlide>
      </Swiper>

      <div className='popularProducts' >

        <p className='popularProductsHeader'>Popular products</p>

        <ul className='popularProductsList'>

          <li className='popularProductsListFocus'>Cameras</li>
          <li>Laptops</li>
          <li>Tablets</li>
          <li>Mouse</li>

        </ul>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={pagination}
        modules={[Pagination]}
        className="cardsContainerSwiper"

      >
        <SwiperSlide>
        <div className='cardsContainer'>  
        <Card link={require('../../img/fotoaparat.png')} header='Cannon Camera' price='$11,70' /> 
          <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />

      <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      </div>


        </SwiperSlide>

        <SwiperSlide>
        <div className='cardsContainer'>  
        <Card link={require('../../img/fotoaparat.png')} header='Cannon Camera' price='$11,70' />  
          <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />

      <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      </div>

        </SwiperSlide>

        </Swiper>

      <BannerLaptop/>

      <div className='slideWide'>
        <SlideCard />
        <div className='wideWrapper'>
        <WideCard className='firstWideCard' link={require('../../img/joystick.png')} header='Play game' price='$11,70'/>
      <WideCard link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70'/>
        </div>

      </div>

      <div className='advantagesWrapper'>

      <Advantages link={require('../../img/boxtick.png')} advantagesHeader='Free delivery' paragraph='On order above $50,00' />

      <Advantages link={require('../../img/crown.png')} advantagesHeader='Best quality' paragraph='Best quality in low price'  />

      <Advantages link={require('../../img/shieldsecurity.png')} advantagesHeader='1 year warranty' paragraph='Avaliable warranty' />
      
      </div>




      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="ppCardMySwiper"
        
      >
        <SwiperSlide>


<PpCard ppCardProfilePhoto ={require('../../img/ppFirst.png')} ppCardName='Savannah Nguyen' ppCardParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'/>

<PpCard ppCardProfilePhoto ={require('../../img/ppsecond.png')} ppCardName='Esther Howard' ppCardParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'/>

<PpCard ppCardProfilePhoto ={require('../../img/ppthird.png')} ppCardName='Esther Howard' ppCardParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'/>


        </SwiperSlide>

        <SwiperSlide>

<PpCard ppCardProfilePhoto ={require('../../img/ppFirst.png')} ppCardName='Savannah Nguyen' ppCardParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'/>

<PpCard ppCardProfilePhoto ={require('../../img/ppsecond.png')} ppCardName='Esther Howard' ppCardParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'/>

<PpCard ppCardProfilePhoto ={require('../../img/ppthird.png')} ppCardName='Esther Howard' ppCardParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.'/>

        </SwiperSlide>

        </Swiper>




      <Logos />
      <div className='infoCardsAppWrapper'>

        <div className='latestText'>

          <p className='infoCardsLatest'>Latest news</p>
          <p className='infoCardsViewAll'>View all</p>

        </div>

      <div className='swiperInfoCardsContainer'>
        
        
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
      
        <div className='infoCardsContainer'>

        <InfoCards InfoCardsDate='22,oct,2021' InfoCardsQuestion='Who avoids a 
        pain that produces?' InfoCardsParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.' InfoCardsAuthor='By spacing tech' InfoCardsImg={require('../../img/infoCardsImg1.png')}/>

        <InfoCards InfoCardsDate='22,oct,2021' InfoCardsQuestion='Who avoids a 
        pain that produces?' InfoCardsParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.' InfoCardsAuthor='By spacing tech' InfoCardsImg={require('../../img/infoCardsImg2.png')}/>

        </div>


        </SwiperSlide>

        <SwiperSlide>
      
      <div className='infoCardsContainer'>

      <InfoCards InfoCardsDate='22,oct,2021' InfoCardsQuestion='Who avoids a 
      pain that produces?' InfoCardsParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.' InfoCardsAuthor='By spacing tech' InfoCardsImg={require('../../img/infoCardsImg1.png')}/>

      <InfoCards InfoCardsDate='22,oct,2021' InfoCardsQuestion='Who avoids a 
      pain that produces?' InfoCardsParagraph='Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.' InfoCardsAuthor='By spacing tech' InfoCardsImg={require('../../img/infoCardsImg2.png')}/>

      </div>


      </SwiperSlide>

        </Swiper>
        
        </div>  


      </div>

      </div>      

    </div>
  )
}
