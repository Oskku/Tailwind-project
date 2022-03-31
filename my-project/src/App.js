import './App.css';
import Home from './pages/index'
import About from './pages/About'
import Contact from './pages/Contact';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Services from './components/Services'
import { Route, Switch } from 'react-router';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/services/:serviceId' component={Services}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
