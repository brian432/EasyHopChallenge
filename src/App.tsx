import { FC } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import './app.css'
import NotFound from './components/NotFound/NotFound'
interface AppProps { }
const App: FC<AppProps> = ({ }) => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App