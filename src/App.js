import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Works from "./components/Works/Works"
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Tracker from "./components/Tracker/Tracker";
function App() {
  return (
    <div
      className="App"
    >
     
      <Navbar />
      <Intro />
      <Works />
      <Testimonial />
      <Contact />
      <Footer /> 
      <BrowserRouter>
      <Routes>
        <Route path="/tracker" element= {<Tracker/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
