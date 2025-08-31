import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Context} from "../../index" 
import { Dropdown, Row, Col } from 'react-bootstrap';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '',  number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number ))
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
                     <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                     <Dropdown.Menu>
                        {device.types.map(type => <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
                     </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                     <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                     <Dropdown.Menu>
                        {device.types.map(brand => <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
                     </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control 
                        className='mt-3'
                        placeholder='add device name'>
                    </Form.Control>
                     <Form.Control 
                        className='mt-3'
                        placeholder='add price'
                        type='number'
                        >
                    </Form.Control>
                     <Form.Control 
                        className='mt-3'
                        // placeholder='add device name'
                        type='file'
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