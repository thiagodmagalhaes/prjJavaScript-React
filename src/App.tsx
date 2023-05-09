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
  return <div className='App' onClick={getCordenates}>
    {clickedPoints.map((clickedPoints)=>{
      return <div 
        style={{
          left: clickedPoints.clientX, 
          top: clickedPoints.clientY,
          position : 'absolute',
        
        }}
          
      > 
        0
      </div>

    })}  </div>
  
 }

export default App
