import React from 'react'
import '../App.css'

function Healthcare() {
  const healthTopics = [
    {
      title: "การตรวจสุขภาพประจำ",
      description: "ความสำคัญของการตรวจร่างกายตามปกติสำหรับผู้สูงอายุ",
      tips: [
        "การตรวจร่างกายประจำปี",
        "การทดสอบการมองเห็นและการได้ยิน",
        "การตรวจความหนาแน่นของกระดูก",
        "การตรวจคัดกรองมะเร็ง"
      ]
    },
    {
      title: "การจัดการยา",
      description: "เคล็ดลับสำหรับการจัดระเบียบและการรับประทานยาอย่างปลอดภัย",
      tips: [
        "ใช้กล่องแบ่งยา",
        "เก็บรายการยา",
        "ตั้งการแจ้งเตือนรายวัน",
        "ตรวจสอบยาพร้อมแพทย์"
      ]
    },
    {
      title: "การรับประทานอาหารอย่างมีสุขภาพ",
      description: "แนวทางโภชนาการสำหรับผู้สูงอายุ",
      tips: [
        "รับประทานอาหารที่สมดุลและอุดมไปด้วยผลไม้และผัก",
        "ดื่มน้ำตลอดทั้งวัน",
        "รวมแหล่งโปรตีนในทุกมื้อ",
        "จำกัดอาหารแปรรูปและน้ำตาล"
      ]
    },
    {
      title: "การออกกำลังกายและความคล่องตัว",
      description: "โปรแกรมออกกำลังกายที่ปลอดภัยสำหรับผู้สูงอายุ",
      tips: [
        "เดินวันละ 30 นาที",
        "ฝึกความแข็งแรงสัปดาห์ละสองครั้ง",
        "แบบฝึกความสมดุลเพื่อป้องกันการหกล้ม",
        "การยืดเหยียดเพื่อความยืดหยุ่น"
      ]
    }
  ]

  return (
    <div className="healthcare-page">
      <header className="page-header">
        <h1>ข้อมูลสุขภาพ</h1>
        <p>ทรัพยากรสุขภาพที่จำเป็นและเคล็ดลับสำหรับการดูแลผู้สูงอายุ</p>
      </header>
      
      <section className="health-topics">
        {healthTopics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h2>{topic.title}</h2>
            <p className="topic-description">{topic.description}</p>
            <ul className="tips-list">
              {topic.tips.map((tip, tipIndex) => (
                <li key={tipIndex}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      
      <section className="additional-resources">
        <h2>ทรัพยากรเพิ่มเติม</h2>
        <ul>
          <li>สถาบันแห่งชาติเกี่ยวกับการสูงอายุ: nia.nih.gov</li>
          <li>ศูนย์ควบคุมและป้องกันโรค: cdc.gov/aging</li>
          <li>เมดิแคร์: medicare.gov</li>
        </ul>
      </section>
      
      <div className="back-link">
        <a href="/">&larr; กลับไปหน้าหลัก</a>
      </div>
    </div>
  )
}

export default Healthcare