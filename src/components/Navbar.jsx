function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <h2>Product Store</h2>
      <div>
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => onNavigate("home")}
        >
          Home
        </button>
        <button
          className={currentPage === "about" ? "active" : ""}
          onClick={() => onNavigate("about")}
        >
          About
        </button>
      </div>
    </nav>
  );
}

export default Navbar;