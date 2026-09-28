import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section contact">

      <div className="section-number">
        03.
      </div>

      <div className="contact-content">

        <h2 style={{ color: '#502100' }}>
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
  );
}

export default Contact;