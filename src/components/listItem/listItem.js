// import React from 'react'
import './listItem.css'
const ListItem = ({id, prd, cost, onDelete}) => {
  return (
    <li>
        <span>№{id}</span>
        <span>{prd}</span>
        <span>{cost} UZS</span>
        <span onClick={onDelete}>Delete</span>
    </li>
    
  )
}

export default ListItem
