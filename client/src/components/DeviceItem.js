import React, { useContext } from 'react';
import {observer} from "mobx-react-lite"
import { Col, Card, Container, Row, Image } from 'react-bootstrap';
import {Context} from "../index" 
import star from '../assets/Star_small.png'
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/const';

const DeviceItem = observer(({device}) => {
    const navigate = useNavigate()
// console.log('navigate', navigate)
    

    return ( 
            <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
                <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                    <Image width={150} height={150} src={device.img}/>
                    <div className='d-flex justify-content-between align-items-center mt-1'>
                        <div style={{color: 'gray'}}>Somthing...</div>
                        <div className='d-flex align-items-center'>
                            <div>{device.rating}</div>
                            <Image width={18} height={18} src={star}/>    
                        </div>
                    </div>
                    <div>{device.name}</div>
                </Card>
            </Col>
        );
})
 
export default DeviceItem;