import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          Home ||
          <Route path="/cart" element={<Cart />} />
          Cart
        </Routes>
      </div>
    </div>
  );
}

export default App;
