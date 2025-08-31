import React from 'react';
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import bigStar from '../assets/Star_1_big.png'
import  {useParams} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import {fetchOneDevice} from "../http/deviceAPI"


const DevicePage = () => {
    //  const device = {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`}
    //  const description = [
    //     {id: 1, title: 'RAM', description: '5gb'},
    //     {id: 2, title: 'Processor', description: 'pentiem space '},
    //  ]
    const [device, setDevice] = useState({info: []})
    // const params = useParams() 
    const {id} = useParams()

    useEffect(() => {
        //  fetchOneDevice(id).then(data => console.log(data.id))
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])


    return ( 
        <div>
            <Container className='mt-4'>
                <Row>
                    <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                    <h3 className='mt-4 ms-4'>{device.name}</h3>
                </Col>
                 <Col md={4}>
                  <Row className='d-flex flex-column mt-2'>
                    <h3>Info: </h3>
                    {/* {description.map((info, index) => mock data */}
                    {device.info && device.info.length > 0 ? (device.info.map((info, index) => 
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>
                    )) : (
                                <Row>No information available</Row>
                            )}
                </Row>
                </Col>
                 <Col md={4}>
                    <Card 
                        className='d-flex flex-column '
                        style={{border: "none"}}
                    >
                        <h3>{device.name}</h3>
                        <h3 style={{textAlign: "end"}}>{device.price}$</h3>
                        
                        <Button>Add to basket</Button>
                    </Card>
                    <Card className='mt-5' style={{border: "none"}}>
                       <div className='d-flex flex-column align-items-center'>
                        {/* <h2>{device.name}</h2> */}
                        <div className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover ', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </div>
                    </Card>
                </Col>
                
                </Row>  
               
            </Container>
        </div>
     );
}
 
export default DevicePage;