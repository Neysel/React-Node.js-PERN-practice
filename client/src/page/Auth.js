import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';

// http://localhost:3000/login

const Auth = () => {
    return ( 
        <div>
            <Container 
              className='d-flex justify-content-center align-items-center'
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className='p-5'>
                    <h2 className='m-auto'>Authorization</h2>
                    <Form>

                    </Form>
                </Card>
            </Container>
        </div>
     );
}
 
export default Auth;