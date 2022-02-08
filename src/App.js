import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateBook from "./components/test/CreateBook";
import UpdateBookInfo from "./components/test/UpdateBookInfo";
import ShowBookDetails from "./components/test/ShowBookDetails";
import TestComponent from "./components/test/TestComponent";
import Simulation from "./components/Simulation";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/about" element={<About />} />

        <Route path="/:id" element={<TestComponent />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/" element={<UpdateBookInfo />} />
        <Route path="/show-book/:id" element={<ShowBookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
