import {Link, Routes, Route} from "react-router-dom"
import '../src/App.css'
import Beranda from "./pages/Beranda"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="">
      <div className="min-h-screen bg-gray-200">
        <div className="bg-slate-700 px-6 py-2 shadow-lg font-bold text-white">
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-800 transition-all ease-in-out" to= "/">Beranda</Link>
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-800 transition-all ease-in-out" to= "/About">Gallery</Link>
          <Link className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-gray-800 transition-all ease-in-out" to= "/Contact">Hari Besar</Link>
        </div>
        <div className="mx-12 px-8 py-6 bg-white shadow">
          <Routes>
            <Route path="/" element={<Beranda />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;