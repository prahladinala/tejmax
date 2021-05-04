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
import Signin from './components/Signin'
import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} exact path='/' exact />
        <Route component={Movies} exact path='/movies' />
        <Route component={Theatres} exact path='/theaters' />
        <Route component={SingleTheatre} exact path='/theater/:id' />
        <Route component={SingleMovie} exact path='/movie/:id' />
        <PrivateRoute component={Cart} exact path='/cart' />
        <PrivateRoute component={UserDashboard} exact path='/user/dashboard' />
        <AdminRoute component={AdminDashboard} exact path='/admin/dashboard' />
        <Route component={Signup} exact path='/signup' />
        <Route component={Signin} exact path='/signin' />
        <Route component={NotFound} />
      </Switch>
      <LoginPopup />
      <Footer />
    </BrowserRouter>
  )
}

export default App
