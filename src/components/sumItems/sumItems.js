import React from 'react'
import './sumItems.css'
import { MdAutoDelete } from "react-icons/md";
import { GiMoneyStack, GiReceiveMoney } from "react-icons/gi";
const SumItems = ({count, itogo, allRestore}) => {
  return (
    <div className='summa'>
       <p>
       Jami: <br/><span>{count}</span> ta product
       </p>
       <p>
        Hisob<GiMoneyStack size={20}/>: <br/><span>{itogo}</span> UZS
       </p>
       <p>
        Cashback<GiReceiveMoney size={20}/>: <br/><span style={{color: 'lime'}}>{Math.floor(itogo*0.02)}</span> uzs
       </p>
       <button onClick={allRestore} className='allRemove'>
        <MdAutoDelete />
       </button>
    </div>
  )
}

export default SumItems
