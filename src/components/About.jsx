import React from 'react';

function About() {
  return (
    <section id="tentang" className="section about">

      <div className="section-number">
        01.
      </div>

      <div className="about-content">

        <h2 style={{ color: '#502100' }}>
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
  );
}

export default About;