import "./styles/App.css";
import Home from "./pages/Home";
import { SessionProvider } from "./SessionContext";
import ViewSessions from "./pages/ViewSessions";
import AddSession from "./pages/AddSession";
import "bootstrap/dist/css/bootstrap.min.css";
import EditSession from "./pages/EditSession";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <SessionProvider>
        <Routes>
          <Route path="/ViewSessions" element={<ViewSessions />} />
          <Route path="/AddSession" element={<AddSession />} />
          <Route path="/EditSession/:id" element={<EditSession />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </SessionProvider>
    </Router>
  );
}

export default App;
