import React, { useState } from 'react'
import './inputPanel.css'

const InputPanel = ({addItem}) => {

  const [item, setItem] = useState({id: '', name: '', cost: ''})
  // const [style, setStyle] = useState({
  //   transition: 0,
  //   boxShadow: 'none'
  // })
  const onChangeVals = e => {
    setItem({...item, [e.target.name]: e.target.value})
    // setStyle({
    //   transition: '1.2s',
    //   boxShadow: '0 0 10px 4px navy'
    // })

  }

  const addForm = e => {
    e.preventDefault();
    let rnd = Math.floor(Math.random() * 100)
    const data = {
      id: rnd,
      name: item.name,
      cost: parseInt(item.cost)
    }
    addItem(data)
    setItem(
      {
        id: '',
        name: '',
        cost: ''
      }
    )
  }


  return (
    <form className='panel' onSubmit={addForm}>
      <input className='input' name='name' value={item.name} onChange={onChangeVals} type="text" placeholder='Item Name' required />
      <input className='input' name='cost' value={item.cost} onChange={onChangeVals} type="number" min="0" placeholder='0.00 $' required />
      <button>Add</button>
    </form>
  )
}

export default InputPanel
