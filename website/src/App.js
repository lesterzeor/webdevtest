import "./css/App.css";
import Home from "./components/Home";
import { data } from "./util/webdevtest-data.js";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  console.log("data", data);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
