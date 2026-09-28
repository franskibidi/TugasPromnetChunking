import React from 'react';

function Hero() {
  return (
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
  );
}

export default Hero;