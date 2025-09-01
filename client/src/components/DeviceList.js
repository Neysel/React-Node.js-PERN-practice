import React, { useContext } from 'react';
import {observer} from "mobx-react-lite"
import { Card, Row } from 'react-bootstrap';
import {Context} from "../index" 
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
 const {device} = useContext(Context)

console.log(device)

    return ( 
        <div className='d-flex'>
            {device.devices.map(device_item => 
                <DeviceItem key={device_item.id} device={device_item}/>
            )}
        </div>
     );
})
 
export default DeviceList;