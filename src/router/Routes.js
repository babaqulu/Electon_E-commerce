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

export default function Routes() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/all-categories", element: <AllCategories /> },
    { path: "/product", element: <Product />}
  ]);
  return element;
}


