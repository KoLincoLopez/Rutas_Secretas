import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// importa aquí otras páginas como Productos, Blogs, Contactos

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/productos" element={<Productos />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;