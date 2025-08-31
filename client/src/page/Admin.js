import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return ( 
        <div>
            <Container>
                <div  className='d-flex flex-column mt-4'>
                <Button className='mt-3' onClick={() => setTypeVisible(true)}>
                    ADD TYPE
                    </Button>
                <Button className='mt-3' onClick={() => setBrandVisible(true)}>
                    ADD BRAND
                    </Button>
                <Button className='mt-3' onClick={() => setDeviceVisible(true)}>
                    ADD DEVICE
                    </Button> 
                </div>
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            </Container>
        </div>
     );
}
 
export default Admin;