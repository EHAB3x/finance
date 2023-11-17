import React, { useEffect, useState } from 'react'
import './Content.css'
import Control from '../Control/Control'
import Summary from '../Summary/Summary'
const Content = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('Income');
  const [form, setForm] = useState();
  const [overlay, setOverlay] = useState();
  const [details, setDetails] = useState([]);
  const titleInp = document.getElementById('title');
  const priceInp = document.getElementById('price');
  useEffect(()=>{
    const form = document.querySelector('#finance__form');
    setForm(form)
    const overlay = document.querySelector('.finance__control-overlay')
    setOverlay(overlay);
  },[]);
  
  const btnClick = ()=>{
    if(title !== '' && price !== ''){
      details.push({title,price,type})
      setTitle('')
      setPrice('')
      titleInp.value = '';
      priceInp.value = '';
      form.style.display = "none";
      overlay.style.display ='none';
    }else{
      alert("Please Fill All Fields");
    }
  }
  console.log(details);
  return (
    <div className='finance__content'>
      <div className='finance__control-overlay'></div>
      <div className='finance__control-form' id='finance__form'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' onChange={(e)=> setTitle(e.target.value)}></input>
        <label htmlFor='price'>Price</label>
        <input type='number' id='price' min='0' name='price' onChange={(e)=> {
          if(e.target.value >= 0){
              setPrice(e.target.value)
            }else{
              alert('Enter Positive Number')
            }
            }}></input>
        
        <div className="finance__control-form__radio">
          <input type="radio" name="type" id="income" onChange={(e)=>{if(e.target.checked === true ){setType('Income')}}} defaultChecked/>
          <label htmlFor="income">Income</label>
          <input type="radio" name="type" id="expense" onChange={(e)=>{if(e.target.checked === true ){setType('Expense')}}}/>
          <label htmlFor="expense">Expense</label>
        </div>
        <button type='submit' onClick={btnClick}>Add</button>
      </div>
        <Control details={details}/>
        <Summary/>
    </div>
  )
}

export default Content