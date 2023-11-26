import "./styles/App.css";
import Home from "./pages/Home";
import ViewSessions from "./pages/ViewSessions";
import AddSession from "./pages/AddSession";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ViewSessions" element={<ViewSessions />} />
        <Route path="/AddSession" element={<AddSession />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
