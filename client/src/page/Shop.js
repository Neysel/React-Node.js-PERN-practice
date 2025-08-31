import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';


const Shop = () => {
    return ( 
        <div>
            <Container>
                <Row className='mt-3'>
                    <Col md={3}>
                    <TypeBar/>
                    </Col>
                    <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    </Col>
                </Row>
                
            </Container>
            
        </div>
     );
}
 
export default Shop;