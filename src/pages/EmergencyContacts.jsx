import React from 'react'
import '../App.css'

function EmergencyContacts() {
  const emergencyNumbers = [
    { 
      name: "บริการฉุกเฉิน", 
      number: "191", 
      description: "ตำรวจ ดับเพลิง รถพยาบาล",
      category: "emergency",
      icon: "🚨"
    },
    { 
      name: "ศูนย์พิษวิทยา", 
      number: "1367", 
      description: "ให้คำแนะนำเกี่ยวกับสารพิษ ยา หรือของมีพิษ ตลอด 24 ชั่วโมง",
      category: "health",
      icon: "💊"
    },
    { 
      name: "สายด่วนสุขภาพจิต", 
      number: "1323", 
      description: "ให้คำปรึกษา ปัญหาความเครียด ซึมเศร้า หรือความคิดฆ่าตัวตาย ตลอด 24 ชั่วโมง",
      category: "mental-health",
      icon: "❤️"
    },
    { 
      name: "สายด่วนผู้สูงอายุ", 
      number: "1300", 
      description: "ศูนย์ช่วยเหลือสังคม กรมพัฒนาสังคมฯ",
      category: "elder-care",
      icon: "👵"
    }
  ];

  const localContacts = [
    { 
      name: "แพทย์ประจำครอบครัว", 
      number: "(555) 123-4567", 
      description: "ดร.เจน สมิธ",
      category: "doctor",
      icon: "👨‍⚕️"
    },
    { 
      name: "โรงพยาบาลที่ใกล้ที่สุด", 
      number: "(555) 987-6543", 
      description: "โรงพยาบาลเซนต์แมรี่ เมดิคอลเซ็นเตอร์",
      category: "hospital",
      icon: "🏥"
    },
    { 
      name: "ร้านขายยา", 
      number: "(555) 456-7890", 
      description: "ร้านขายยาคอร์เนอร์",
      category: "pharmacy",
      icon: "🏪"
    },
    { 
      name: "ผู้ดูแล", 
      number: "(555) 234-5678", 
      description: "จอห์น โด",
      category: "caregiver",
      icon: "👨"
    }
  ];

  return (
    <div className="emergency-contacts-page">
      <header className="page-header">
        <h1>เบอร์ติดต่อฉุกเฉิน</h1>
        <p>หมายเลขโทรศัพท์ที่สำคัญสำหรับการเข้าถึงอย่างรวดเร็ว</p>
      </header>
      
      <section className="contact-section">
        <h2>หมายเลขฉุกเฉินระดับประเทศ</h2>
        <div className="contacts-grid">
          {emergencyNumbers.map((contact, index) => (
            <div key={index} className={`contact-card contact-card--${contact.category}`}>
              <div className="contact-icon">{contact.icon}</div>
              <h3 className="contact-name">{contact.name}</h3>
              <div className="contact-number">{contact.number}</div>
              <p className="contact-description">{contact.description}</p>
              <button className="call-button" onClick={() => window.location.href = `tel:${contact.number}`}>
                โทรด่วน
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <section className="contact-section">
        <h2>รายชื่อติดต่อท้องถิ่นของคุณ</h2>
        <div className="contacts-grid">
          {localContacts.map((contact, index) => (
            <div key={index} className={`contact-card contact-card--${contact.category}`}>
              <div className="contact-icon">{contact.icon}</div>
              <h3 className="contact-name">{contact.name}</h3>
              <div className="contact-number">{contact.number}</div>
              <p className="contact-description">{contact.description}</p>
              <button className="call-button" onClick={() => window.location.href = `tel:${contact.number}`}>
                โทรด่วน
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <div className="quick-dial">
        <h3>แจ้งเหตุฉุกเฉินด่วน</h3>
        <p>ในกรณีฉุกเฉิน กดปุ่มด้านล่างเพื่อแจ้งเหตุทันที:</p>
        <a href="/emergency-alert" className="emergency-btn large">แจ้งเหตุฉุกเฉิน</a>
      </div>
      
      <div className="back-link">
        <a href="/">&larr; กลับไปหน้าหลัก</a>
      </div>
    </div>
  )
}

export default EmergencyContacts