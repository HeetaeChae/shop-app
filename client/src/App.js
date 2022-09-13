import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Upload from "./pages/upload/Upload";
import Cart from "./pages/cart/Cart";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
