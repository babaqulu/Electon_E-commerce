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

export default function Routes({search}) {
  const element = useRoutes([
    { path: "/", element: <Home search={search} /> },
    { path: "/all-categories", element: <AllCategories search={search} /> },
    { path: "/product", element: <Product />}
  ]);
  return element;
}


