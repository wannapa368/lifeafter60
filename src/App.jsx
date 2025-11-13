import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Healthcare from './pages/Healthcare'
import EmergencyContacts from './pages/EmergencyContacts'
import LocalServices from './pages/LocalServices'
import EmergencyAlert from './pages/EmergencyAlert'
import VolunteerFinder from './pages/VolunteerFinder'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <div className="nav-brand">
            <a href="/">LifeAfte60</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">หน้าหลัก</a></li>
            <li><a href="/healthcare">ข้อมูลสุขภาพ</a></li>
            <li><a href="/emergency-contacts">เบอร์ติดต่อฉุกเฉิน</a></li>
            <li><a href="/local-services">บริการใกล้บ้าน</a></li>
            <li><a href="/emergency-alert" className="emergency-btn">แจ้งเหตุฉุกเฉิน</a></li>
            <li><a href="/volunteer-finder">ค้นหาอาสาสมัคร</a></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/local-services" element={<LocalServices />} />
          <Route path="/emergency-alert" element={<EmergencyAlert />} />
          <Route path="/volunteer-finder" element={<VolunteerFinder />} />
        </Routes>
        
        <footer>
          <p>© 2025 LifeAfte60 - Community Support Network</p>
        </footer>
      </div>
    </Router>
  )
}

export default App