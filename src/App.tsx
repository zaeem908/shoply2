import Main from "./pages/main";
import Contact from "./pages/contact";
import { Route,Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts.tsx";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/allproducts" element={<AllProducts/>}/>
      <Route path="/categories" element={<Categories/>}/>
     </Routes>
    </div>
  );
}

export default App;
