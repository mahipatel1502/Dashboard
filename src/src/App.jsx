// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Home from "./Home";
// import LoginPage from "./LoginPage";
// import Signup from "./Signup";



// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <>
//     <Router>
//       <div className="grid-container">
//         <Header OpenSidebar={OpenSidebar} />
//         <Sidebar
//           openSidebarToggle={openSidebarToggle}
//           OpenSidebar={OpenSidebar}
//         />
//         <Routes>
         
//           <Route path="/" element={<Home />} />

//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </Router>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import StudentProgress from "./StudentProgress";
import Feedback from "./Feedback";
import Learningpath from "./Learningpath";
// import LearningPath from "./LearningPath"; // Import LearningPath
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
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/student-progress" element={<StudentProgress />} />
            <Route path="/feedback-reports" element={<Feedback />} />
            <Route path="/create-path" element={<Learningpath />} />
            {/* <Route path="/learning-path" element={<LearningPath />} /> Route to LearningPath */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;