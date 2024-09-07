
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import LoginPage from "./LoginPage";
import Signup from "./Signup";



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
    <Router>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
         
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;