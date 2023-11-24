import React, { useEffect, useState } from 'react'
import './Summary.css'
const Summary = ({details}) => {
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    var allMoney = 0;
    details.map(item=>{
      if(item.type === "Income"){
        allMoney += Number(item.price);
        setTotal(+allMoney);
      }else{
        allMoney -= Number(item.price);
        setTotal(+allMoney);
      }
      return 0;
    })
  },[details.length])
  return (
    <div className='finance__summary'>
      <div className='finance__summary-head'>
        <h3 className='finance__summary-head__h3'>Summary</h3>
      </div>

      <div className='finance__summary-body'>
        <ul className='finance__summary-body__all'>
        {details.length === 0 
        ? (<h3 style={{textAlign:"center"}}>No Items Found</h3>)
        : details.map((ele , ind) =>(
          <li style={ele.type === "Income" ?{color:"green",justifyContent:"start",paddingLeft:"40px"}:{color:"red",justifyContent:"end",paddingRight:"40px"}} key={ind} className='finance__control-body__all-element'>
            <p className='finance__summary-body__all-element__price'>{ele.price}$</p>
          </li>
        ))}
        </ul>
      </div>
      <div className='finance__summary-total'>
        <h3>Total : <span style={+total >=0 ? {color:"green"}:{color:"red"}}>{+total}</span></h3>
      </div>
      
    </div>
  )
}

export default Summary