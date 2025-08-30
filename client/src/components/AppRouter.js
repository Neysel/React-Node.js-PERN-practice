 import React from 'react';
 import {Routes, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
 
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
        </Routes>
    </div> );
 }
  
 export default AppRouter;