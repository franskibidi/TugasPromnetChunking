import React from 'react';
import './css/style.css';

function App() {
  return (
    <div className="site">

      {/* =========================
          NAVBAR
      ========================= */}
      <header className="navbar">
        <a href="#beranda" className="logo">
          Abiyu Zafran.
        </a>

        <nav>
          <a href="#beranda" className="active">Beranda</a>
          <a href="#tentang">Tentang Saya</a>
          <a href="#galeri">Galeri</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* =========================
          HERO / HOME
      ========================= */}
      <section id="beranda" className="hero">

        <div className="hero-text">

          <span className="small-title">
            HALO, SAYA
          </span>

          <h1>
            Abiyu<br />
            Zafran
          </h1>

          <p>
            Mahasiswa Pendidikan Ilmu Komputer yang tertarik
            pada teknologi, desain, dan hal-hal baru yang
            bermanfaat.
          </p>

          <div className="hero-buttons">

            <a href="#galeri" className="button primary">
              Lihat Galeri →
            </a>

            <a href="#tentang" className="button">
              Tentang Saya
            </a>

          </div>

        </div>


        {/* =========================
            FOTO HOME
        ========================= */}
        <div className="hero-photo">

          <div className="photo-frame">

            <div className="photo-placeholder">
              <img
                src="/img1.jpg"
                alt="Abiyu Zafran"
                className="profile-photo"
              />
            </div>

          </div>

          <p className="photo-note">
            sebuah proses,<br />
            bukan kesempurnaan.
          </p>

        </div>


        <div className="side-note">
          Student<br />
          Learner<br />
          Problem Solver
          <br />—
        </div>

      </section>


      {/* =========================
          TENTANG SAYA
      ========================= */}
      <section id="tentang" className="section about">

        <div className="section-number">
          01.
        </div>

        <div className="about-content">

          <h2 style={{ color: "#502100" }}>
        Tentang Saya
        </h2>

          <div className="about-grid">

            <div className="about-text">

              <p>
                Saya Abiyu Zafran, mahasiswa Program Studi
                Pendidikan Ilmu Komputer di Universitas
                Pendidikan Indonesia.
              </p>

              <p>
                Saya tertarik pada pengembangan web, desain
                antarmuka, dan eksplorasi teknologi dalam
                bidang pendidikan.
              </p>

              <p>
                Selain itu, saya juga suka belajar hal baru,
                mengerjakan proyek kecil, dan mendokumentasikan
                hal-hal menarik.
              </p>

              <div className="handwriting">
                Terus belajar, terus berkembang. —
              </div>

            </div>


            <div className="bio">

              <div>
                <span>NAMA</span>
                <b>Abiyu Zafran</b>
              </div>

              <div>
                <span>NIM</span>
                <b>2505565</b>
              </div>

              <div>
                <span>ANGKATAN</span>
                <b>25</b>
              </div>

              <div>
                <span>PROGRAM STUDI</span>
                <b>Pendidikan Ilmu Komputer</b>
              </div>

              <div>
                <span>UNIVERSITAS</span>
                <b>Universitas Pendidikan Indonesia</b>
              </div>

            </div>

          </div>

        </div>


        <div className="side-note right">
          Ideas<br />
          to a better<br />
          tomorrow.
          <br />—
        </div>

      </section>


      {/* =========================
          GALERI
      ========================= */}
      <section id="galeri" className="section gallery">

        <div className="section-number">
          02.
        </div>

        <div className="gallery-content">

          <div className="section-heading">

            <h2 style={{ color: "#502100" }}>
              Galeri
            </h2>


          </div>


          <div className="gallery-grid">

            {/* NGODING */}
            <div className="gallery-item">

              <div className="gallery-image">
                <img
                  src="/img2.jpg"
                  alt="Ngoding"
                  className="gallery-photo"
                />

              </div>

            </div>


            {/* BELAJAR */}
            <div className="gallery-item">

              <div className="gallery-image">
                <img
                  src="/img3.jpeg"
                  alt="Belajar"
                  className="gallery-photo"
                />
              </div>

            </div>


            {/* KESEHARIAN */}
            <div className="gallery-item">

              <div className="gallery-image">
                <img
                  src="/img4.jpeg"
                  alt="Keseharian"
                  className="gallery-photo"
                />
              </div>

            </div>


            {/* DOKUMENTASI */}
            <div className="gallery-item">

              <div className="gallery-image">
                <img
                  src="/img5.jpeg"
                  alt="Dokumentasi"
                  className="gallery-photo"
                />
              </div>

            </div>


            {/* HAL MENARIK */}
            <div className="gallery-item">

              <div className="gallery-image">
                <img
                  src="/img6.jpeg"
                  alt="Hal Menarik Lainnya"
                  className="gallery-photo"
                />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section id="contact" className="section contact">

        <div className="section-number">
          03.
        </div>

        <div className="contact-content">

          <h2 style={{ color: "#502100" }}>
            Contact
          </h2>

          <p className="contact-description">
            Kalau ada yang ingin ditanyakan, berdiskusi,
            atau sekadar menyapa, silakan hubungi saya
            melalui kontak di bawah ini.
          </p>


          <div className="contact-list">

            <a href="mailto:abiyuzafran1707@gmail.com">
              <span className="contact-icon">
                ✉
              </span>

              abiyuzafran1707@gmail.com
            </a>


            <a href="#">
              <span className="contact-icon">
                ◎
              </span>

              @abyzfrn17_
            </a>


            <a href="#">
              <span className="contact-icon">
                in
              </span>

              Abiyu Zafran
            </a>

          </div>

        </div>


        <div className="side-note contact-note">
          Sampai jumpa<br />
          di proyek berikutnya!
          <br />—
        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer>

        <span>
          Abiyu Zafran - Indonesia Univeristy of Education
        </span>

        <div>

          <a href="#beranda">
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

        </div>

      </footer>

    </div>
  );
}

export default App;