import "./App.css";
import Home from "./pages/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Details from "./components/Details";
import NotFound from "./pages/404";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services/:slug" component={Details}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
