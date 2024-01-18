import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./Components/Landing";
import { Room } from "./Components/Room";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/room" element={<Room/>} />
        </Routes>
      </Router>
  );
}

export default App;
