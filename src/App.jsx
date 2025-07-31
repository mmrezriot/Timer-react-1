import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './timer'


const App = ()=>{
  
const [times , setTimes] = useState([]);

return(
<>
<Timer times={times} setTimes={setTimes}/>
</>
)
}



export default App
