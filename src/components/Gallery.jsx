import React from 'react';

function Gallery() {
  const galleryItems = [
    {
      image: '/img2.jpg',
      alt: 'Ngoding'
    },
    {
      image: '/img3.jpeg',
      alt: 'Belajar'
    },
    {
      image: '/img4.jpeg',
      alt: 'Keseharian'
    },
    {
      image: '/img5.jpeg',
      alt: 'Dokumentasi'
    },
    {
      image: '/img6.jpeg',
      alt: 'Hal Menarik Lainnya'
    }
  ];

  return (
    <section id="galeri" className="section gallery">

      <div className="section-number">
        02.
      </div>

      <div className="gallery-content">

        <div className="section-heading">

          <h2 style={{ color: '#502100' }}>
            Galeri
          </h2>

        </div>

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>

              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-photo"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;