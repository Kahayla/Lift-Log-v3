import "./styles/App.css";
import Home from "./pages/Home";
import ViewSession from "./pages/ViewSession";
import AddSession from "./pages/AddSession";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ViewSession" element={<ViewSession />} />
        <Route path="/AddSession" element={<AddSession />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
