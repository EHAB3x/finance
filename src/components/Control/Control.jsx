import React, { useEffect, useState } from 'react'
import './Control.css'
const Control = ({details}) => {
  const [form, setForm] = useState();
  const [overlay, setOverlay] = useState();
  useEffect(()=>{
    const form = document.querySelector('#finance__form');
    setForm(form)
    const overlay = document.querySelector('.finance__control-overlay')
    setOverlay(overlay);
  },[]);

  const showForm = ()=>{
      form.style.display = 'flex';
      overlay.style.display ='block';
  }
  return (
    <div className='finance__control'>
      <div className='finance__control-head'>
        <h3 className='finance__control-head__h3'>Control</h3>
        <button onClick={showForm} className='finance__control-head__btn'>Add</button>
      </div>

      <div className='finance__control-body'>
        <ul className='finance__control-body__all'>
        {details.length === 0 
        ? (<h3 style={{textAlign:"center"}}>No Items Found</h3>)
        : details.map((ele , ind) =>(
          <li key={ind} className='finance__control-body__all-element'>
            <p className='finance__control-body__all-element__title'>{ele.title}</p>
            <p className='finance__control-body__all-element__price'>{ele.price}$</p>
            <p className='finance__control-body__all-element__type'>{ele.type}</p>
          </li>
        ))}
        </ul>
      </div>
      
    </div>
  )
}

export default Control