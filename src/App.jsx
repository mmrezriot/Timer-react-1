import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './timer'
import { timesContext } from './contex'


const App = ()=>{
  
const [times , setTimes] = useState([]);

return(
 
<>
 <timesContext.Provider value={{times:times, setTimes:setTimes}}>
<Timer />
</timesContext.Provider>
</>

)
}



export default App
