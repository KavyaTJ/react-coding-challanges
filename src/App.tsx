import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Accordion from "./challenges/accordion/Accordion";
import Timer from "./challenges/timer/Timer";
import Todo from "./challenges/todo/Todo";
import SearchFilter from "./challenges/searchFilter/SearchFilter";
import LiveCharcterCounter from "./challenges/LiveCharacterCounter/LiveCharacterCounter";

// Layout component (contains header/nav)
function Layout() {
  return (
    <>
      <h1>React Coding Challenges 🚀</h1>
      <nav>
        <ul>
          <li><Link to="/accordion">Accordion</Link></li>
          <li><Link to="/timer">Timer</Link></li>
          <li><Link to="/todo">To Do</Link></li>
          <li><Link to="/searchFilter">Search Filter</Link></li>
          <li><Link to="/liveCharacterCounter">Live Character Counter</Link></li>

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
        <Route path="/todo" element={<Todo />} />
        <Route path="/searchFilter" element={<SearchFilter />} />
        <Route path="/liveCharacterCounter" element={<LiveCharcterCounter />} />





      </Routes>
    </Router>
  );
}