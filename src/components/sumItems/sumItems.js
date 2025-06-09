import React from 'react'
import './sumItems.css'
const SumItems = ({count, itogo, allRestore}) => {
  return (
    <div className='summa'>
       <p>
       Jami: <span>{count}</span> ta product
       </p>
       <p>
        Hisob: <span>{itogo}</span> UZS
       </p>
       <button onClick={allRestore} className='allRemove'>All restore</button>
    </div>
  )
}

export default SumItems
