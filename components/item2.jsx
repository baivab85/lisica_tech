import React, { useState } from 'react';
import Food from './Food';

const Item = () => {
    const [data] = useState(Food);

    return (
        <div className='container-fluid'>
            <h4 className='text-center pt-3'>Explore our Centres of Clinical Excellence</h4><br></br>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center menu-btn'>
                    <button className='btn btn-primary'>Book ProHealth</button>
                    <button className='btn btn-primary'>Consult Online</button>
                    <button className='btn btn-primary'>Buy Medicine</button>
                    <button className='btn btn-primary'>Find Hospital</button>
                    <button className='btn btn-primary'>View Health Record</button>
                    <button className='btn btn-primary'>Overall Critreas</button>
                    <button className='btn btn-primary'>Staff Maintenance</button>
                    <button className='btn btn-primary'>Gallery</button>
                    <button className='btn btn-primary'>Others</button>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Item;
