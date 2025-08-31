import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import {observer} from "mobx-react-lite"
import {Context} from "../index" 

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return ( 
        <div className='d-flex mt-2' style={{display: 'flex', gap: '15px'}}>
            {device.brands.map(brand => 
                <Card 
                style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand?.id ? 'primary' : 'light'}
                    >
                    {brand.name}
                </Card>
            )}
        </div>
     );
})
 
export default BrandBar;