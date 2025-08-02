import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './timer'
import { timesContext } from './contex'
import TimeList from './time'


const App = ()=>{
  
const [times , setTimes] = useState([]);

return(
 
<>
 <timesContext.Provider value={{times, setTimes}}>
<Timer />
<br/>
<TimeList/>
</timesContext.Provider>
</>

)
}



export default App
