import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './components/home';
import{ Add } from './components/add'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
