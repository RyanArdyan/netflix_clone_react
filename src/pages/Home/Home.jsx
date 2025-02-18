// impor react untuk menggunakan jsx
import React from 'react'
// panggil css nya
import './Home.css';
// import komponen Navbar untuk memanggil tampilan nya
import Navbar from '../../components/Navbar/Navbar';
// bahkan gambar harus di import
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';

// komponen adalah function yang mengembalikkan tampilan dan kode javascript
const Home = () => {
  return (
    <div className="home">
      {/* memanggil komponen Navbar */}
      <Navbar/>
      
      <div className='hero'>
        {/* import gambar yang sudah di import */}
        <img src={hero_banner} alt='' className='banner-img' />
        <div className='hero-caption'>
        {/* import gambar yang sudah di import */}
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className='hero-btns'>
            <button className='btn'>              
              {/* panggil gambar yang sudah di import */}
              <img src={play_icon} alt='' />
               Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt='' />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home