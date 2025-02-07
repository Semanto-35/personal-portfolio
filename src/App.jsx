import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Navbar from "./pages/Home/Navbar/Navbar";
import Footer from "./pages/Home/Footer/Footer";

function App() {


  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<ProjectDetails />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
