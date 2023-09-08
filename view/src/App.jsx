import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './assets/style/style.css'
import ScrollToTop from './components/ScrollToTop';
import BuyTickets from './pages/BuyTickets'
import Event from './pages/Event'
import Home from './pages/Home'
import Login from './pages/Login';
import Orders from './pages/Orders';
import Perfil from './pages/Perfil';
import Register from './pages/Register';
import Tickets from './pages/Tickets';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/event/:eventId' element={<Event/>}/>
          <Route path='/buy-tickets/:eventId' element={<BuyTickets/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/orders/:userId" element={<Orders/>}/>
          <Route path="/tickets/:orderId" element={<Tickets/>}/>
          <Route path="/perfil/:userId" element={<Perfil/>}/>
      </Routes>
    </Router>
  )
}

export default App
