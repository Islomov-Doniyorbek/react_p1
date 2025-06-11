// import React from 'react'
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import './listItem.css'
const ListItem = ({i, prd, cost, onDelete}) => {
  // let i=0;
  return (
    <tr>
        <td>{i}</td>
        <td>{prd}</td>
        <td>{cost} <span>uzs</span></td>
        <td>
          {/* <button style={{'--clr': 'orange'}}><FaPencilAlt size={20} /></button>  */}
          <button style={{'--clr': 'red'}} onClick={onDelete}><FaTrashAlt size={20} /></button>
        </td>
    </tr>
    
  )
}

export default ListItem
