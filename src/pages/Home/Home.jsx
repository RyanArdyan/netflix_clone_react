// impor react untuk menggunakan jsx
import React from 'react'
// panggil css nya
import './Home.css';
// import komponen Navbar untuk memanggil tampilan nya
import Navbar from '../../components/Navbar/Navbar';

// komponen adalah function yang mengembalikkan tampilan dan kode javascript
const Home = () => {
  return (
    <div className="home">
      {/* memanggil komponen Navbar */}
      <Navbar/>
    </div>
  )
}

export default Home