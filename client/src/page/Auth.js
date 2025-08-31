import React from 'react';
import { Card, Container, Form, Row } from 'react-bootstrap';
import {Button} from "react-bootstrap"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import { NavLink, useLocation } from 'react-router-dom';

// http://localhost:3000/login

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

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
                        />
                        <Form.Control 
                            className='mt-3'
                            placeholder='enter password'
                        />
                        <Row>
                            <div className='mt-3' style={{textAlign: "center"}}>
                                {isLogin ? 
                                <span>Don't have account?`<NavLink to={REGISTRATION_ROUTE}>Register</NavLink></span>
                                : <span>Already have account?<NavLink to={LOGIN_ROUTE}>Log in</NavLink> </span>}
                            </div>
                        </Row>
                        <Button className='mt-3'>
                            Enter
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
     );
}
 
export default Auth;