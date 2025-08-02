import React ,{ useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from './item'
import { timesContext } from './contex'


const List = (props)=>{
  const context = useContext(timesContext)
return(
<div>
{context.times.map((a)=>{
  return  <Item key={Math.random()}> {a} </Item>
})}
</div>
)
}



export default List