import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// memanggil index.css sebagai css utama
import './index.css'
// memanggil komponen App sebagai komponen utama aplikasi
// impor App dari './App.jsx';
import App from './App.jsx'

// buatAkar dari dokumen dapatkanElementDenganId('root') yang di dapatkan dari index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
