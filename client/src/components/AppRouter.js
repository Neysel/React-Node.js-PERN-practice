 import React from 'react';
 import {Routes, Route, Redirect, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/const';
import Shop from '../page/Shop';
import { useContext } from 'react';
import {Context} from "../index" 

 const AppRouter = () => {
    // const isAuth = false

    const {user} = useContext(Context)
    return ( 
    <div>
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Component})=> 
                <Route key={path} path={path} element={Component} />
            )}
            {publicRoutes.map(({path, Component})=> 
                <Route key={path} path={path} element={Component} />
            )}
                {/* <Route path='*' element={<Shop/>}/>  */}
        </Routes>
              
    </div> );
 }
  
 export default AppRouter;