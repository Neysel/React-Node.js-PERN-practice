 import React from 'react';
 import {Routes, Route, Redirect, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/const';
 
 const AppRouter = () => {
    const isAuth = false
    console.log( publicRoutes.map(({path, Component})=> 
                <Route key={path} path={path} element={Component} />
            ))
    return ( 
    <div>
        <Routes>
            {isAuth === true && authRoutes.map(({path, Component})=> 
                <Route key={path} path={path} element={Component} />
            )}
            {publicRoutes.map(({path, Component})=> 
                <Route key={path} path={path} element={Component} />
            )}
                <Route path='*' element={SHOP_ROUTE}/> 
        </Routes>
              
    </div> );
 }
  
 export default AppRouter;