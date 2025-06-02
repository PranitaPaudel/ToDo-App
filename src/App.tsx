import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
