import React from 'react'
import Home from '../page/home/Home'
import AllCategories from '../page/all-categories/AllCategories'
import Product from '../page/product/Product'

import {
  BrowserRouter as Router,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';

export default function Routes({handleClick,result,handleChange}) {
  const element = useRoutes([
    { path: "/", element: <Home handleClick={handleClick} /> },
    { path: "/all-categories", element: <AllCategories result={result} handleClick={handleClick} handleChange={handleChange} /> },
    { path: "/product", element: <Product handleChange={handleChange}/>}
  ]);
  return element;
}


