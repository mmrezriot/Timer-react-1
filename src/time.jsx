import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './list'

import './App.css'

const TimeList = (props)=> {

return(
        <List >
            {props.children}
        </List>
)

}

export default TimeList;