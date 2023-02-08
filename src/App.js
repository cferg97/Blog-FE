import HomeComponent from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navigation";
import Blog from "./Blog";
import Register from "./Components/Register";
import LogInPage from "./Components/LogIn";

function App() {
  return (
    <Router>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" exact element={<HomeComponent />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-new" element={<HomeComponent />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
