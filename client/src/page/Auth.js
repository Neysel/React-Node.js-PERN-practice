import React, { useState, useContext } from 'react';
import { Card, Container, Form, Row } from 'react-bootstrap';
import {Button} from "react-bootstrap"
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import {observer} from "mobx-react-lite"
import {Context} from "../index" 

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {
            let data;
            console.log('islogin', isLogin)
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                        
            }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE )
        } catch(e) {
            alert(e.response.data.message)
        }
       

    }

    return ( 
        <div>
            <Container 
              className='d-flex justify-content-center align-items-center'
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className='p-5' >
                    <h2 className='m-auto'>{isLogin ? `Authorization`: `Registration`}</h2>
                    <Form className='d-flex flex-column'>
                        <Form.Control 
                            className='mt-3'
                            placeholder='enter email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control 
                            className='mt-3'
                            placeholder='enter password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                        />
                        <Row>
                            <div className='mt-3' style={{textAlign: "center"}}>
                                {isLogin ? 
                                <span>Don't have account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink></span>
                                : <span>Already have account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink> </span>}
                            </div>
                        </Row>
                        <Button
                        onClick={click}
                         className='mt-3'>
                            {isLogin ? `Enter` : `Registration`}
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
     );
})
 
export default Auth;