import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/About";
import Contact from "./components/Contact";
import WeatherWidget from "./components/projects/WeatherWidget";
import Calculator from "./components/projects/Calculator";
import Hangman from "./components/projects/Hangman";
import NorthcodersNews from "./components/projects/NorthcodersNews";
import SalfordDevils from "./components/projects/SalfordDevils";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />}></Route>
        <Route
          path="/projects/weather-widget"
          element={<WeatherWidget />}
        ></Route>
        <Route path="/projects/calculator" element={<Calculator />}></Route>
        <Route path="/projects/hangman" element={<Hangman />}></Route>
        <Route
          path="/projects/northcoders-news"
          element={<NorthcodersNews />}
        ></Route>
        <Route
          path="/projects/salford-red-devils"
          element={<SalfordDevils />}
        ></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
