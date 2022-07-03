import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Weather from "./Pages/Weather";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/weather/:city" element={<Weather/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
