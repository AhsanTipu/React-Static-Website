import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Menu from "./components/Menu"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Menu />

    <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/services" component={Services} />
<Route exact path="/contact" component={Contact} />
<Home />


    </Switch>
    <br />
    <Footer />
    </div>
  );
}

export default App;
