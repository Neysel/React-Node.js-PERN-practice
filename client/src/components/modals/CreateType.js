import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CreateType = ({show, onHide}) => {
    return ( <div>
           <Modal

      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Form.Control
                    placeholder={`add type name`}
                />
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Add new type</Button>
        <Button onClick={onHide} variant='outline-danger'>Close</Button>
      </Modal.Footer>
    </Modal>
    </div> );
}
 
export default CreateType;