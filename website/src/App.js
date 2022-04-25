import "./css/App.css";
import Home from "./components/Home";
import Promotion from "./components/Promotion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app_container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotion" element={<Promotion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
