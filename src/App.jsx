import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Start } from './pages/Start'
import { AddUsers } from './pages/addUsers'

function App() {

  return (
    
      <div>
        {/* <h1 className='text-3xl text-red-300'>Home</h1> */}

        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/add-users" element={<AddUsers/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    
  )
}

export default App
