import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="app_container">
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
const ErrorPage = () => {
  return <div>This page does not exist...</div>;
};
export default App;
