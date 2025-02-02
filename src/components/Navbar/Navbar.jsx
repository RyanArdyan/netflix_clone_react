// import react agar bisa menggunakan jsx dan membuat komponen
import React from 'react'
// import komponen Navbar
import './Navbar.css'
// bahkan kita harus mengimpor sebuah gambar sebagai komponen di react
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

// komponen adalah function yang mengembalalikkan tampilan dan kode javascript
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        {/* gunakan logo sebagai komponen */}
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} alt='' className='profile' />
          <img src={caret_icon} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Navbar