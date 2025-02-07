import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {


  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<ProjectDetails/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
