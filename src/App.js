import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About/About'
import Cards from './components/Services/Cards'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignInUp/SignUp';
import SignIn from './pages/SignInUp/SignIn';
function App() {
  return ( 
      <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={LandingPage}/> 
        <Route path="/about" exact component={About}/>
        <Route path="/services" exact component={Cards}/>
        <Route path="/contact" exact component={Contact}/> 
        <Route path="/sign-up" exact component={SignUp}/> 
        <Route path="/sign-in" exact component={SignIn}/> 
      </Switch>  
      </div>
  );
}

export default App;
