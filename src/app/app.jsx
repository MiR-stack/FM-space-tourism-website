import Home from "../pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "../pages/destination/destination";
import Crew from "../pages/crew/crew";
import Technology from "../pages/tecnology/technology";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/destinations" element={<Destination />}  />
      <Route path="/crew" element={<Crew />}  />
      <Route path="/technology" element={<Technology />}  />
      </Routes>
    </Router>
  );
};

export default App;
