// mengimpor komponen react untuk menggunakan jsx dan membuat komponen
import React from 'react'
// import komponen Home
import Home from './pages/Home/Home'

// komponen adalah function yang mengembalalikkan tampilan dan kode javascript
const App = () => {
  return (
    <div>
      {/* panggil isi komponen Home */}
      <Home/>
    </div>
  )
}

export default App