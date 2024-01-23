import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Oferta from "./Pages/Oferta";
import Jejum from "./Pages/Jejum";
import Localiza from "./Pages/localiza";
import Cultos from "./Pages/Cultos";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/cultos" element={<Cultos />} />
          <Route path="/jejum" element={<Jejum />} />
          <Route path="/localiza" element={<Localiza />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
