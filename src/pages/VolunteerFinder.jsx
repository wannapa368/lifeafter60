import React, { useState } from 'react'
import '../App.css'

function VolunteerFinder() {
  const [searchLocation, setSearchLocation] = useState('');
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      distance: "0.5 ไมล์จากคุณ",
      services: ["บริการขนส่ง", "การจัดส่งมื้ออาหาร", "ค้นหาอาสาสมัคร"],
      rating: 4.9,
      contact: "(555) 123-0001"
    },
    {
      id: 2,
      name: "Michael Chen",
      distance: "1.2 ไมล์จากคุณ",
      services: ["บริการขนส่ง", "ศูนย์ผู้สูงอายุ", "การรับประทานอาหารอย่างมีสุขภาพ"],
      rating: 4.8,
      contact: "(555) 123-0002"
    },
    {
      id: 3,
      name: "Robert Williams",
      distance: "1.8 ไมล์จากคุณ",
      services: ["การดูแลสุขภาพที่บ้าน", "โรงพยาบาลที่ใกล้ที่สุด", "ศูนย์ผู้สูงอายุ"],
      rating: 4.7,
      contact: "(555) 123-0003"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      distance: "2.3 ไมล์จากคุณ",
      services: ["การตรวจสุขภาพประจำ", "ศูนย์ผู้สูงอายุ", "การจัดส่งมื้ออาหาร"],
      rating: 4.9,
      contact: "(555) 123-0004"
    }
  ]);

  const requestHelp = (volunteerId) => {
    alert(`ขอความช่วยเหลือ ${volunteers.find(v => v.id === volunteerId)?.name}. เจ้าหน้าที่ฉุกเฉินกำลังเดินทางไปยังตำแหน่งของคุณ`);
  };

  return (
    <div className="volunteer-finder-page">
      <header className="page-header">
        <h1>ค้นหาอาสาสมัคร</h1>
        <p>เชื่อมต่อกับสมาชิกชุมชนที่เป็นประโยชน์ใกล้บ้านคุณ</p>
      </header>
      
      <section className="search-section">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="ป้อนตำแหน่งของคุณ..." 
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button>ค้นหา</button>
        </div>
      </section>
      
      <section className="volunteers-directory">
        <h2>อาสาสมัครที่มีให้บริการใกล้คุณ</h2>
        <div className="volunteers-grid">
          {volunteers.map(volunteer => (
            <div key={volunteer.id} className="volunteer-card">
              <div className="volunteer-header">
                <h3>{volunteer.name}</h3>
                <span className="distance">{volunteer.distance}</span>
              </div>
              <div className="volunteer-rating">
                <span className="stars">{'★'.repeat(Math.floor(volunteer.rating))}</span>
                <span className="rating-value">{volunteer.rating}</span>
              </div>
              <div className="volunteer-services">
                <h4>บริการที่เสนอ:</h4>
                <ul>
                  {volunteer.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="volunteer-contact">
                <p><strong>ติดต่อ:</strong> {volunteer.contact}</p>
              </div>
              <button onClick={() => requestHelp(volunteer.id)} className="btn primary">
                ขอความช่วยเหลือ
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <div className="become-volunteer">
        <h3>ต้องการเป็นอาสาสมัคร?</h3>
        <p>เข้าร่วมชุมชนผู้ช่วยเหลือของเราและสร้างผลกระทบในชีวิตของใครบางคน</p>
        <button className="btn secondary">ลงทะเบียนเป็นอาสาสมัคร</button>
      </div>
      
      <div className="back-link">
        <a href="/">&larr; กลับไปหน้าหลัก</a>
      </div>
    </div>
  )
}

export default VolunteerFinder