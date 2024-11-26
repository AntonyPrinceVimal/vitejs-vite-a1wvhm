import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [col, setCol] = useState("#000000");

  function change(event){
    setCol(event.target.value);
  }

  return (
    <div>
      <h1 className="topic">Color Code Finder</h1>
      <div className="square" style={{background:col}}></div>
      <h1 className="text" >Selected Color : {col}</h1>
      <input className="form" type="color" value={col} onChange={change}/>
    </div>
  )
}

export default App
