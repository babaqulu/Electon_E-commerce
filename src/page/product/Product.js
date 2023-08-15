import React from 'react'
import './Product.css'
import NavigationViewer from '../../common/navigationViewer/NavigationViewer'
import Card from '../../common/cards/card/Card'
import DropDown from '../../common/dropDown/DropDown'
import CardLong from '../../common/cards/long/cardLong'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/navigation';

export default function Product() {
  
  const [rating,setRating]=useState(null);
  const [hover, setHover]=useState(null);

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

  const ProductImg=['../../img/greenJoystick.png', '../../img/blackJoystick.png', '../../img/blackJoystick.png.png']

  return (

      <div className='productWrapper'>

      <NavigationViewer />

<div className='leftRightSide'>

<div className='productLeftSide'>

<div className='heroImg'>

<img src={require('../../img/greenJoystick.png')}/>

</div>

</div>

<div className='productRightSide'>

  <div className='productHeaderReview'>

    <div className='headerReviewWrapper'>

    <div className='productInfo'>

<p className='productHeader'>Play game</p>
<p className='productPrice'>$11,70</p>

</div>

<div className='productReview'>

  <div className='productStars'>

    {[...Array(5)].map((star, index) => {
      const currentRating = index + 1;
      return (
        <label>
          <input 
            type='radio' 
            name="rating"
            value={currentRating} 
            onClick={() => setRating(currentRating)}
          />
          <FaStar 
          className='faStar' 
          size={27} 
          color={currentRating<=(hover||rating)?"#ffc107":"#e4e5e9"}
          onMouseEnter={()=>{setHover(currentRating)}}
          onMouseLeave={()=>{setHover(null)}}/>
        </label>
      );
      })}

  </div>

  <p className='reviewInfo'>Reviews {rating}</p>
  
</div>

<div className='availabilityChecker'>

  <p className='availabilityHeader productHeaderSections'>Availability:</p>

  <span className='availabilityInfo'>
    <img src={require('../../img/greencheck.png')}/>
    <p className='stock'>In stock</p>
  </span>
</div>

<p className='productAnounce'>Hurry up! only 34 product left in stock!</p>

    </div>

  <div className='productLine'></div>

  </div>

  <div className='customize'>

    <div className='customizeWrapper'>

    <div className='productColorSelector'>

      <p className='colorHeader productHeaderSections'>Color:</p>

      <div className='colorInput'>

      <input type='radio' className='greenRadio' name='color'/>
      <input type='radio' className='blackRadio' name='color'/>

      </div>

    </div>

    <div className='productSizeSelector'>
      <p className='sizeHeader productHeaderSections'>Size:</p>

      <div className='sizeInput'>

      <div className='inputDivs'>
        <p>30</p>
      <input type='radio' value='30'  name='size'/>
      </div>

      <div className='inputDivs'>
        <p>56</p>
      <input type='radio' value='56'  name='size'/>
      </div>

      <div className='inputDivs'>
        <p>42</p>
      <input type='radio' value='42'  name='size'/>
      </div>

      <div className='inputDivs'>
        <p>48</p>
      <input type='radio' value='48'  name='size'/>
      </div>

      </div>

    </div>

    <div className='productQuantitySelector'>
      <p className='quantityHeader productHeaderSections'>Quantity:</p>

      <div className='sizeInput'>

      <input type='number' placeholder='1' min='1' max='20'  name='quantity'/>

      </div>

    </div>

    <div className='productButtons'>

      <button className='productButton'>Add to cart</button>
      <button className='productButton'>Buy it now</button>
      <button className='productHeartButton'><img src={require('../../img/blackheart.png')}/></button>

    </div>


    </div>

    <div className='productLine'></div>

  </div>

  <div className='productShare'>
    
    <div className='productShareSectionWrappers'>

    <p className='skuHeader productHeaderSections'>Sku:</p>
    <p className='productHeaderSections'>01133-9-9</p>

    </div>

    <div className='productShareSectionWrappers'>

    <p className='productCategoryHeader productHeaderSections'>Category:</p>
    <p className='productCategoryInfo'>20% off, 49% off Alex remote</p>

    </div>

    <div className='productShareSectionWrappers'>

    <p className='productShareHeader productHeaderSections'>Share:</p>
    <div>
      <img src={require('../../img/google.png')}/>
      <img src={require('../../img/facebook.png')}/>
      <img src={require('../../img/whatsapp.png')}/>
    </div>

    </div>



  </div>

</div>

</div>

<div className='descriptionReviewsButtons'>

<button className='description'>Description</button>
<button className='review'>Review</button>

</div>

<div className='customerReviews'>

<p className='cutomerReviewHeader'>Customer Reviews</p>

    <p className='noreview'>No reviews yet</p>

    <button className='writeReview'>Write a review</button>

</div>

<div className='related'>

  <p className='relatedHeader'>Realted Product</p>
  <div className='relatedCardsContainer'> 
        <Card link={require('../../img/fotoaparat.png')} header='Cannon Camera' price='$11,70' /> 
          <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />

      </div>

</div>

      </div>

  )
}
