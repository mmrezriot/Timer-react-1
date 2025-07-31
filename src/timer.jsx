import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeList from './time'
import { timesContext } from './contex'


var interval ;

class Timer extends React.Component {

  constructor(){
  super()
  this.state= {
  seconds : 0,
  minutes : 0,
  hours : 0,
  isStart: false

}
  }

  static contextType = timesContext;


  

startTimer = ()=> {
  console.log(this.props.times)
interval = setInterval(() => {
  this.setState({
    seconds : this.state.seconds + 1,
    isStart : true
  })
  if(this.state.seconds == 60){
  this.setState({
    seconds : 0 , 
    minutes : this.state.minutes + 1
  })
  }
  if(this.state.minutes == 60){
  this.setState({
    minutes : 0 , 
    hours : this.state.hours + 1
  })
  }
}, 1000);
 }


 stopTimer = ()=> {
  this.setState({
    isStart:false
  })
  clearInterval(interval);
 }


 resetTimer = ()=> {
  clearInterval(interval);
this.setState({
  seconds : 0,
  minutes : 0,
  hours : 0,
  isStart: false
})

}

seveTime= ()=> {
let s = this.state.seconds; 
let m = this.state.minutes;
let h = this.state.hours;
let newT = `${s > 9 ? s : "0"+ s} : ${m > 9 ? m : "0"+ m} : ${h > 9 ? h : "0"+ h}`
this.context.setTimes([...this.context.times , newT]);

}


render(){

  let s = this.state.seconds; 
  let m = this.state.minutes;
  let h = this.state.hours;

  return (
    <>
    
     <div class="timer-container" onClick={this.seveTime}>
  
  <div class="time-segment" >
    <span id="seconds">{s > 9 ? s : "0"+ s}</span>
    <span class="label">ثانیه</span>
  </div>
  <div class="separator">:</div>
  <div class="time-segment">
    <span id="minutes">{m > 9 ? m : "0"+ m}</span>
    <span class="label">دقیقه</span>
  </div>
  <div class="separator">:</div>
  <div class="time-segment">
    <span id="hours">{h > 9 ? h : "0"+ h}</span>
    <span class="label">ساعت</span>
  </div>
</div>

<div class="buttons-container">
  <button id="start-btn" onClick={this.startTimer}>شروع</button>
  <button id="stop-btn" onClick={this.stopTimer}>توقف</button>
  <button id="reset-btn" onClick={this.resetTimer}>ریست</button>
  <button id="reset-btn" onClick={this.seveTime}>چاپ</button>
</div>

<TimeList>
  {this.context.times}
 
</TimeList>

    </>
  )
}
}

export default Timer