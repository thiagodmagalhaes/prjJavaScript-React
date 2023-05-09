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

  function DesfazendoPonto(){
    const newClickedPoint = [...clickedPoints]
    newClickedPoint.pop
    setClickedPoints(newClickedPoint)
  }
  return( 
    <>
    <button onClick={DesfazendoPonto}>Desfazer</button>
    <div className='App' onClick={getCordenates}>
    {clickedPoints.map((clickedPoints)=>{
      return( <div 
        style={{
          left: clickedPoints.clientX-6, 
          top: clickedPoints.clientY-6,
          position : 'absolute',
          borderRadius: '50%',
          background: 'red',
          width: '10px',
          height: '10px',
        
        }}
      ></div>
      )

    })}  </div>
    </>
  )
}
  
 

export default App
