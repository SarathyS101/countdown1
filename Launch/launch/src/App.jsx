import { useState } from 'react'
// import App.css from '/styles/App.css'
import "./styles/App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1 style={{color:"red", fontSize:"36px"}}>My Name is Sarathy Selvam!</h1>
      </main>
    </>
  )
}

export default App
