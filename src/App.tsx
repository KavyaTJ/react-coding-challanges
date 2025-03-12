import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Accordion from "./challenges/accordion/Accordion";
import Timer from "./challenges/timer/timer";

// Layout component (contains header/nav)
function Layout() {
  return (
    <>
      <h1>React Coding Challenges 🚀</h1>
      <nav>
        <ul>
          <li><Link to="/accordion">Accordion</Link></li>
          <li><Link to="/timer">Timer</Link></li>
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
        <Route path="/timer" element={<Timer />} />


      </Routes>
    </Router>
  );
}