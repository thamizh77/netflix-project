
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Fail from './components/Fail'


function App() {


  return (
    <BrowserRouter>
    
    
      <Routes>
        

        <Route path='/' element={<Login />}></Route>
        <Route path='/success' element={<Dashboard/>}></Route>
        <Route path='/fail'  element={<Fail/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
