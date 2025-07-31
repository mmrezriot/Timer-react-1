import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from './item'


const List = (props)=>{
return(
<div>
{props.children.map((a)=>{
  return  <Item key={Math.random()}> {a} </Item>
})}
</div>
)
}



export default List