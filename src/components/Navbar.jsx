import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      {/* Gunakan Link untuk logo agar kembali ke home */}
      <Link to="/" className="logo">
        Abiyu Zafran.
      </Link>

      <nav>
        {/* Gunakan NavLink agar otomatis mendapat class "active" saat halaman dibuka */}
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Beranda
        </NavLink>

        <NavLink to="/tentang" className={({ isActive }) => isActive ? "active" : ""}>
          Tentang Saya
        </NavLink>

        <NavLink to="/galeri" className={({ isActive }) => isActive ? "active" : ""}>
          Galeri
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;