import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Movies from './components/Movies'
import Theatres from './components/Theatres'
import LoginPopup from './components/LoginPopup'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Movies} path='/movies' />
        <Route component={Theatres} path='/theaters' />
      </Switch>
      <LoginPopup />
      <Footer />
    </BrowserRouter>
  )
}

export default App
