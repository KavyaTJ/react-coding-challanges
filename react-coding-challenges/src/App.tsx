import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Accordion from "./challenges/accordion/accordion";

// Layout component (contains header/nav)
function Layout() {
  return (
    <>
      <h1>React Coding Challenges 🚀</h1>
      <nav>
        <ul>
          <li><Link to="/accordion">Accordion</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </Router>
  );
}