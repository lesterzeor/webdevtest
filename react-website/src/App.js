import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app_container">
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
