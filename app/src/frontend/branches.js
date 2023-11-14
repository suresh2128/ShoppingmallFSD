import React from 'react'
import './contact'
export default function City() {
  return (
    <div>
        {/* <i className="fas fa-caret-down fa-3x" style={{ color: 'red' }}></i> */}
        <div className='row mt-4'>
            <div className='col-md-12 location'>
                <h1 className='mt-5 mb-5 text-center'style={{color:'white'}}><b>Mall Outlets</b></h1>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-4 p-2'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-dot" style={{color: 'black',marginLeft:'100px'}}></i> Kakinada</h6>
            </div>
            <div className='col-md-4 p-2'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-dot" style={{color: 'black',marginLeft:'90px'}}></i> Rajamundry</h6>
            </div>
            <div className='col-md-4 p-2'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-dot" style={{color: 'black',marginLeft:'100px'}}></i> Mandapeta</h6>
            </div>
        </div>
        <div className='row mt-2'>
            <div className='col-md-4 p-3'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-dot"style={{color: 'black',marginLeft:'290px'}}></i> Amalapuram</h6>
            </div>
            <div className='col-md-4 p-3'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-dot" style={{color: 'black',marginLeft:'310px'}}></i> Samralakota</h6>
            </div>
            <div className='col-md-4 p-3'>
                <h6 style={{fontSize:"21px"}}><i className="fa-solid fa-location-dot" style={{color: 'black',marginLeft:'300px'}}></i> Vizag</h6>
            </div>
        </div>
    </div>
  )
}
