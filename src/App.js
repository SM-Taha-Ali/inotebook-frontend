import './App.css';
import './components/Noteitem.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NoteSate from './context/notes/NoteState';
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteSate>
        <BrowserRouter>
          <Navbar />
          {/* <Alert message="This is good app"/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteSate>
    </>
  );
}

export default App;
