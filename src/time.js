import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class Timer {
    constructor (){
        this.useState= {
       time : new Date().toString()
        }
    }
    revder(){
        console.log(this.useState.time);
    }

}

export default Timer;