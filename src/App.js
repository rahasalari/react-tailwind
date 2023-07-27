//Routers
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Boxes from "./components/Boxes";
import AddTasks from "./components/AddTask";
import Find from "./components/Find";
import LearnMore from "./components/LearnMore";

//router

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Boxes />} />
        <Route path="/features" element={<AddTasks />} />
        <Route path="/pricing" element={<Find />} />
        <Route path="/support" element={<LearnMore />} />
      </Routes>
    </>
  );
}

export default App;
