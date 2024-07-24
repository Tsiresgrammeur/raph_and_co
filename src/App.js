import './App.css';
import { BrowserRouter, Routes, Route,useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Accueil from './accueil/Accueil';
import {  useProSidebar } from "react-pro-sidebar"
import Navbar from './template/Navbar/Navbar';


function App() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="App">

        <main>
          <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
          <BrowserRouter>
        <Navbar />
            <Routes>
              <Route index element={<Accueil />} />
              <Route path="accueil" element={<Accueil />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
  );
}

export default App;
