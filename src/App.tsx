import './App.css'

function App() {
  function getCordentes(e: React.MouseEvent<HTMLElement>){
    console.log(e);
  }
  return <div className='App' onClick={getCordentes}>   </div>
  
  }

export default App
