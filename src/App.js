import './App.css';
import Navbar from "./Navbar";
import SlideShow from "./SlideShow";
import Logo from "./Logo";
import {Route, BrowserRouter as Router , Switch , Link, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";




function App() {
  return (
    <Router>
       <div className="App">
     <Logo/> 
     {/* <Navbar/> */}
       {/* <Models/> */}
   {/* <Footer/> */}
    </div>
        <div className="Navbar">
          <div className="Navbar__menu">
           <ul>
            <li className="btn-grad"><Link to="/" style={{color:"white"}}>HOME</Link></li>
            <li className="btn-grad"><Link to="/about" style={{color:"white"}}>ABOUT</Link></li>
            <li className="btn-grad"><Link to="/products" style={{color:"white"}}>PRODUCTS</Link></li>
            <li className="btn-grad"><Link to="/contact" style={{color:"white"}}>CONTACT US</Link></li>
           </ul>
          </div>
        </div>
        <SlideShow/>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/contact" exact component={Contact}/>
        </Switch>
   
    </Router>
  );
}

export default App;
