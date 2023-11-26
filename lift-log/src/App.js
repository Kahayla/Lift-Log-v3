import "./styles/App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ViewSession" element={<ViewSesion />} />
        <Route
          path="/AddSession"
          element={<AddSession />} // Pass updateAllSessions as a prop
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
