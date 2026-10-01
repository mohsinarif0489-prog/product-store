import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import About from "./components/About.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar currentPage={page} onNavigate={setPage} />
      <main className="container">
        {page === "home" ? <ProductList /> : <About />}
      </main>
    </div>
  );
}

export default App;