import Main from "./pages/Main/index.tsx";
import Contact from "./pages/Contact/index.tsx";
import { Route,Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts/index.tsx";
import Categories from "./pages/Categories/index.tsx";
import Master from "./layouts/Master.tsx";

function App() {
  return (
    <div className="App">
  <Master>
     <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/allproducts" element={<AllProducts/>}/>
      <Route path="/categories" element={<Categories/>}/>
     </Routes> 
  </Master>
    </div>
  );
}

export default App;
