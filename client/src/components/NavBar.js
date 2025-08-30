import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import {Context} from "../index" 
import { SHOP_ROUTE } from '../utils/const';
import { NavLink } from 'react-router-dom';
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return ( 
    <div>
        <nav style={{color:'white', padding: '15px'}} class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <Container>
            <NavLink style={{color:'#bbdeff', fontSize:"20px", textDecoration: "none"}} to={SHOP_ROUTE}>BuySomething</NavLink>
       
            {user.isAuth ? 
                  <Nav style={{color:'white'}} className="ml-auto">
                    <Button>Admin panel</Button>
                    <Button onClick={() => user.setIsAuth(false)} className='ms-4'>Log out</Button>
                 </Nav>
                :
                <Nav style={{color:'white'}} className="ml-auto">
                    <Button  onClick={() => {user.setIsAuth(true); console.log(user.isAuth)}}>Authorization</Button>
                </Nav>
            }
              </Container>
        </nav> 
  
    </div>
     );
})
 
export default NavBar;