import React from 'react'
import './AllCategories.css';
import NavigationViewer from '../../common/navigationViewer/NavigationViewer'
import Card from '../../common/cards/card/Card'
import Filter from '../../common/filter/Filter'
import CheckBox from '../../common/checkBox/CheckBox';
import BannerLaptop from '../../component/banner/BannerLaptop'

import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
  import Routes from '../../router/Routes.js'

export default function AllCategories() {
  return (
    <div className='allCategoriesWrapper'>
      
      <NavigationViewer />

      <div className='allCategoriesBody'>

      <div className='allCategoriesFilter'>

      <Filter />

      </div>

      <div className='allCategoriesCardWrapper'>

      <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />
      <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />
      <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />
      <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />
      <Card link={require('../../img/littleheadphone.png')} header='Wireless headphones' price='$11,70' />
      <Card link={require('../../img/joystick.png')} header='Play game' price='$11,70' />
      <Card link={require('../../img/desktop.png')} header='Tablet as a laptop' price='$11,70' />
      </div>

      </div>

      <BannerLaptop />


      
    </div>
  )
}
