import React from 'react'
import '../App.css'

function Home() {
  return (
    <div className="home-page">
      <header className="app-header">
        <h1>LifeAfte60</h1>
        <p>เครือข่ายสนับสนุนสำหรับผู้สูงอายุ</p>
      </header>
      
      <main>
        <section className="hero">
          <h2>ยินดีต้อนรับสู่เครือข่ายสนับสนุนของคุณ</h2>
          <p>แหล่งข้อมูลครบวงจรสำหรับข้อมูลสุขภาพ ติดต่อฉุกเฉิน และบริการท้องถิ่น</p>
        </section>
        
        <section className="features">
          <div className="feature-card">
            <h3>ข้อมูลสุขภาพ</h3>
            <p>เข้าถึงทรัพยากรสุขภาพที่สำคัญและเคล็ดลับสำหรับการดูแลผู้สูงอายุ</p>
            <a href="/healthcare" className="btn">เรียนรู้เพิ่มเติม</a>
          </div>
          
          <div className="feature-card">
            <h3>เบอร์ติดต่อฉุกเฉิน</h3>
            <p>เข้าถึงหมายเลขฉุกเฉินและรายชื่อติดต่อที่สำคัญอย่างรวดเร็ว</p>
            <a href="/emergency-contacts" className="btn">ดูรายชื่อติดต่อ</a>
          </div>
          
          <div className="feature-card">
            <h3>บริการใกล้บ้าน</h3>
            <p>ค้นหาบริการและความช่วยเหลือใกล้บ้านของคุณ</p>
            <a href="/local-services" className="btn">ค้นหาบริการ</a>
          </div>
          
          <div className="feature-card">
            <h3>แจ้งเหตุฉุกเฉิน</h3>
            <p>แจ้งเหตุให้บริการฉุกเฉินเมื่อจำเป็น</p>
            <a href="/emergency-alert" className="btn emergency-btn">แจ้งเหตุเดี๋ยวนี้</a>
          </div>
          
          <div className="feature-card">
            <h3>ค้นหาอาสาสมัคร</h3>
            <p>เชื่อมต่อกับอาสาสมัครในพื้นที่ของคุณ</p>
            <a href="/volunteer-finder" className="btn">ค้นหาความช่วยเหลือ</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home