// import React from "react";
// import {
//   BsCart3,
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
// } from "react-icons/bs";

// function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           Learning Path DashBoard
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsGrid1X2Fill className="icon" /> Home
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillArchiveFill className="icon" /> Create Learning Path
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillGrid3X3GapFill className="icon" /> Manage Paths
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsPeopleFill className="icon" /> Student Progress
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsListCheck className="icon" /> Resource Library
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsMenuButtonWideFill className="icon" /> Feedback & Reports
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">Learning Path Dashboard</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/home">
            <BsGrid1X2Fill className="icon" /> Home
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/create-path">
            <BsFillArchiveFill className="icon" /> Create Learning Path
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/manage-paths">
            <BsFillGrid3X3GapFill className="icon" /> Manage Paths
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/student-progress"> {/* Corrected the route here */}
            <BsPeopleFill className="icon" /> Student Progress
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/resource-library">
            <BsListCheck className="icon" /> Resource Library
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/feedback-reports">
            <BsMenuButtonWideFill className="icon" /> Feedback & Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;