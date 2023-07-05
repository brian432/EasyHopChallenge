import React, { FC } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import './app.css'
interface AppProps { }
const App: FC<AppProps> = ({ }) => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}
export default App