import React from 'react'
import './Features.css'


const Features = (props) => {
  return (
    <div className='features_Cards'>
        <div className='features_details'>
            <img src={props.Features_img} />
            <h5>{props.Features_title}</h5>
            <p>{props.Features_para}</p>
        </div>

    </div>
  )
}

export default Features