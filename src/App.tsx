import Connections from "./components/Connections"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Router, Route} from 'react-router-dom'

 

function App() { 

  return (
    <> 
    <div>
      <BrowserRouter>
      <Navbar /> 
      <Connections />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
