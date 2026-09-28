import React from 'react';

function Navbar() {
  return (
    <header className="navbar">
      <a href="#beranda" className="logo">
        Abiyu Zafran.
      </a>

      <nav>
        <a href="#beranda" className="active">
          Beranda
        </a>

        <a href="#tentang">
          Tentang Saya
        </a>

        <a href="#galeri">
          Galeri
        </a>

        <a href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;