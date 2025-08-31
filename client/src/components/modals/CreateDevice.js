import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Context} from "../../index" 
import { Dropdown, Row, Col } from 'react-bootstrap';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import { useEffect } from 'react';


const CreateDevice = ({show, onHide}) => {
   const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

        useEffect(() => {
            fetchTypes().then(data => device.setTypes(data))
            fetchBrands().then(data => device.setBrands(data))
            fetchDevices().then(data => device.setDevices(data.rows))
        }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '',  number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number ))
    }

  const selectFile = e => {
        setFile(e.target.files[0])
        console.log(e.target.files)
    }


    return ( 
        <div>
             <Modal

      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                {/* <Form.Control
                    // placeholder={`add device name`}
                   
                /> */}
                    <Dropdown>
                            <Dropdown.Toggle>{device.selectedType.name  || `Choose type`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type => 
                                <Dropdown.Item onClick={() =>
                                device.setSelectedType(type)}
                                 key={type.id}>{type.name}
                                 </Dropdown.Item>)}
                            </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                            <Dropdown.Toggle>{device.selectedBrand.name || `Choose brand`}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                     <Dropdown.Item
                                      onClick={() => device.setSelectedBrand(brand)}
                                      key={brand.id}>{brand.name}
                                     </Dropdown.Item>)}
                            </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        className='mt-3'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='add device name'>
                    </Form.Control>
                     <Form.Control 
                        className='mt-3'
                        value={price}
                         onChange={e => setPrice(Number(e.target.value))}
                        placeholder='add price'
                        type='number'
                        >
                    </Form.Control>
                     <Form.Control 
                        className='mt-3'
                        // placeholder='add device name'
                        type='file'
                        onChange={selectFile}
                        >
                    </Form.Control>
                    <hr/>
                    <Button onClick={addInfo}
                    >Add new property</Button>
                    { info.map(i => 
                        <Row key={i.nummber} className='mt-4'>
                            <Col md={4}  className='mt-2'>
                                <Form.Control placeholder='Property name' />
                            </Col>
                            <Col md={4}  className='mt-2'>
                                <Form.Control placeholder='Property description' />
                            </Col>
                             <Col md={4}  className='mt-2'>
                                <Button 
                                onClick={() => removeInfo(i.number)}
                                variant={"outline-danger"}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Add new device</Button>
        <Button onClick={onHide} variant='outline-danger'>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
     );
}
 
export default CreateDevice;