// import React from 'react'
import ListItem from '../listItem/listItem'
import './list.css'

const List = ({data, onDelete}) => {
  // let i=0;
  console.log(data);
  
  return (
    <ul className='area'>
      {
      data.length === 0 ? <p>Ma'lumotlar mavjud emas!</p> : data.map(item=>(<ListItem key={item.id} id={item.id} prd={item.name} cost={item.cost} onDelete={()=>onDelete(item.id)}/>))        
      }
      
      {/* <p>Ma'lumotlar mavjud emas!</p> */}
    </ul>
    
  )
}

export default List
