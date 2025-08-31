import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CreateDevice = ({show, onHide}) => {
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
                <Form.Control
                    placeholder={`add device name`}
                />
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