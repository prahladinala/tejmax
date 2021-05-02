import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Movies from './components/Movies'
import Theatres from './components/Theatres'
import LoginPopup from './components/LoginPopup'
import SingleTheatre from './components/SingleTheatre'
import NotFound from './components/NotFound'
import SingleMovie from './components/SingleMovie'
import Cart from './components/Cart'
import Signup from './components/Signup'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Movies} path='/movies' />
        <Route component={Theatres} path='/theaters' />
        <Route component={SingleTheatre} path='/theater/:id' />
        <Route component={SingleMovie} path='/movie/:id' />
        <Route component={Cart} path='/cart' />
        <Route component={Signup} path='/signup' />
        <Route component={NotFound} />
      </Switch>
      <LoginPopup />
      <Footer />
    </BrowserRouter>
  )
}

export default App
