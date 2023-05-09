import React, {useState} from 'react'
import './App.css'
interface ClickedProps {
  clientX: number
  clientY: number
}
function App() {

  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([])
  function getCordenates(e: React.MouseEvent<HTMLElement>){
    const { clientX , clientY }  = e 

    setClickedPoints([...clickedPoints, {clientX,clientY}])
    console.log(clickedPoints);
  }
  return <div className='App' onClick={getCordenates}>  </div>
  
 }

export default App
