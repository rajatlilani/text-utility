import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>


      <Navbar title="Props" home="props again again" />
      <TextForm />
      <Routes>


        <Route path="/text" element={<TextForm />} />

        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>



  );
}

export default App;
