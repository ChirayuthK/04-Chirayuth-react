import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserSector from "./pages/UserSector";
import AdminSector from "./pages/AdminSector";
import Owner from "./pages/Owner";

export default function App() {
  return (
    <Router>
      <div className="w-min-screen h-min-screen my-12 mx-12 bg-gray-200">
        <div className="bg-gray-200 text-black font-bold p-4">
          <nav className="bg-gray-200 text-black font-bold p-4">
            <ul className="flex gap-4 justify-end mb-1">
              <li>
                <Link to="/" className="hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/Owner" className="hover:text-yellow-400">Owner</Link>
              </li>
            </ul>
          </nav>
          <hr />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserSector" element={<UserSector />} />
          <Route path="/AdminSector" element={<AdminSector />} />
          <Route path="/Owner" element={<Owner />} />
        </Routes>
      </div>
    </Router>
  );
}