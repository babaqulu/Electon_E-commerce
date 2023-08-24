import React, {useState} from 'react'
import './AllCategories.css';
import NavigationViewer from '../../common/navigationViewer/NavigationViewer'
import Card from '../../common/cards/card/Card'
import Filter from '../../common/filter/Filter'
import CheckBox from '../../common/checkBox/CheckBox';
import BannerLaptop from '../../component/banner/BannerLaptop'
import {DataList} from '../../db/DataList'

import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
  import Routes from '../../router/Routes.js'

export default function AllCategories({search}) {

  const [clicked,setClicked]=useState(true)

  const handleCheck = e =>setClicked(e.target.value)  
  console.log(setClicked);
  

  return (
    <div className='allCategoriesWrapper'>
      
      <NavigationViewer />

      <div className='allCategoriesBody'>

      <div className='allCategoriesFilter'>

      <Filter search={search} handleCheck={handleCheck}/>

      </div>

      <div className='allCategoriesCardWrapper'>

      {DataList
            .filter((item)=>{
              return  item?.title?.toLowerCase().includes(search) || 
              item?.category?.toLowerCase().includes(search) ||
              item?.category?.toLowerCase().includes(clicked) ||
              item?.company?.toLowerCase().includes(search)

            }).map((item)=>(
                    <Card key={item.id} img={item.img} title={item.title} price={item.price} /> 
          ))}

      </div>

      </div>

      <BannerLaptop />


      
    </div>
  )
}
