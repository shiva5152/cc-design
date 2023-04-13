import React from 'react'
import gallaryData from '../utils/gallaryData'
import Gallarypage from './Gallarypage'

const Gallary = () => {
  
  return (
    <div className="gallary-container">
        <h1>Work Gallery</h1>
        <div className='gallary'>
      {gallaryData.map((obj,index)=>{
        return <Gallarypage src={obj.src} key={index} />
      })}
    </div>
    </div>
     )
}

export default Gallary
