import React from 'react'
import '../App.css'

function LocalServices() {
  const services = [
    {
      name: "ศูนย์ผู้สูงอายุ",
      description: "กิจกรรมทางสังคม มื้ออาหาร และโปรแกรมสำหรับผู้สูงอายุ",
      contact: "(555) 111-2222",
      location: "ภายใน 5 ไมล์"
    },
    {
      name: "บริการขนส่ง",
      description: "การขนส่งถึงบ้านสำหรับการนัดหมายแพทย์และการช็อปปิ้ง",
      contact: "(555) 333-4444",
      location: "บริการทั่วเขต"
    },
    {
      name: "การจัดส่งมื้ออาหาร",
      description: "มื้ออาหารร้อนที่ส่งถึงบ้านคุณ",
      contact: "(555) 555-6666",
      location: "โครงการท้องถิ่น"
    },
    {
      name: "การดูแลสุขภาพที่บ้าน",
      description: "บริการพยาบาลและการบำบัดที่บ้าน",
      contact: "(555) 777-8888",
      location: "ผู้ให้บริการที่ได้รับใบอนุญาต"
    },
    {
      name: "ความช่วยเหลือทางกฎหมาย",
      description: "ความช่วยเหลือทางกฎหมายฟรีสำหรับผู้สูงอายุ",
      contact: "(555) 999-0000",
      location: "สำนักงานภูมิภาค"
    },
    {
      name: "การให้คำแนะนำทางการเงิน",
      description: "ความช่วยเหลือในการวางแผนงบประมาณและการเงิน",
      contact: "(555) 222-3333",
      location: "องค์กรไม่แสวงหาผลกำไร"
    }
  ];

  return (
    <div className="local-services-page">
      <header className="page-header">
        <h1>บริการใกล้บ้าน</h1>
        <p>ค้นหาบริการที่เป็นประโยชน์ใกล้บ้านคุณ</p>
      </header>
      
      <section className="services-search">
        <div className="search-box">
          <input type="text" placeholder="ค้นหาบริการ..." />
          <button>ค้นหา</button>
        </div>
      </section>
      
      <section className="services-directory">
        <h2>บริการที่มีให้บริการ</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <p><strong>ติดต่อ:</strong> {service.contact}</p>
                <p><strong>ตำแหน่ง:</strong> {service.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <div className="back-link">
        <a href="/">&larr; กลับไปหน้าหลัก</a>
      </div>
    </div>
  )
}

export default LocalServices