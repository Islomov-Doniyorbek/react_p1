// import React from 'react'

import ListItem from '../listItem/listItem'
import './list.css'
// import noDataImg from '../../imgs/Layer 1.png'

const List = ({data, onDelete}) => {
  let i=1;
  console.log(data);
  
  return (
   <div className='area'>
    
          <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Mahsulot nomi</th>
                  <th>Narxi</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
        {data.length === 0 ? <p>Ma'lumot topilmadi</p> : data.map(item=>(
                <ListItem key={item.id} i={i++} prd={item.name} cost={item.cost} onDelete={()=>onDelete(item.id)}/>
              ))}
                </tbody>
          </table>
     
   </div>
    
  )
}

export default List
