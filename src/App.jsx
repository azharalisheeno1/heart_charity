import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Causes from "./Components/Causes";
import Cards from "./Components/Cards";
import Person from "./Components/Person";
import Volunteer from "./Components/Volunteer";
import News from "./Components/News";
import Customers from "./Components/Customers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Cards />
      <About />
      <Person />
      <Causes />
      <Volunteer />
      <News />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
