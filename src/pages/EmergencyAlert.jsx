import React, { useState } from 'react'
import '../App.css'

function EmergencyAlert() {
  const [alertStatus, setAlertStatus] = useState('ready'); // ready, sending, sent
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const sendAlert = () => {
    if (alertStatus === 'ready') {
      setAlertStatus('sending');
      // Simulate sending alert
      setTimeout(() => {
        setAlertStatus('sent');
      }, 2000);
    }
  };

  return (
    <div className="emergency-alert-page">
      <header className="page-header">
        <h1>แจ้งเหตุฉุกเฉิน</h1>
        <p>ขอความช่วยเหลือทันทีเมื่อคุณต้องการมากที่สุด</p>
      </header>
      
      {alertStatus === 'sent' ? (
        <div className="alert-success">
          <h2>ความช่วยเหลือกำลังมา!</h2>
          <p>การแจ้งเหตุฉุกเฉินของคุณได้ถูกส่งไปยังบริการที่เหมาะสมแล้ว</p>
          <p>เจ้าหน้าที่ฉุกเฉินกำลังเดินทางไปยังตำแหน่งของคุณ</p>
          <button onClick={() => setAlertStatus('ready')} className="btn">ส่งการแจ้งเตือนอื่น</button>
        </div>
      ) : (
        <section className="alert-form">
          <div className="alert-instructions">
            <h2>คำแนะนำฉุกเฉิน</h2>
            <ol>
              <li>สงบใจและรักษาความปลอดภัยของคุณ</li>
              <li>กดปุ่มฉุกเฉินด้านล่าง</li>
              <li>หากเป็นไปได้ ระบุตำแหน่งของคุณ</li>
              <li>รอเจ้าหน้าที่ฉุกเฉินมาถึง</li>
            </ol>
          </div>
          
          <div className="alert-controls">
            <h2>ส่งการแจ้งเตือนฉุกเฉิน</h2>
            <div className="form-group">
              <label htmlFor="location">ตำแหน่งของคุณ:</label>
              <input 
                type="text" 
                id="location" 
                placeholder="ป้อนที่อยู่หรือจุดสังเกตของคุณ" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">ข้อมูลเพิ่มเติม:</label>
              <textarea 
                id="message" 
                placeholder="รายละเอียดเพิ่มเติมสำหรับเจ้าหน้าที่ฉุกเฉิน..." 
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            
            <button 
              onClick={sendAlert} 
              disabled={alertStatus === 'sending'}
              className={`emergency-btn large ${alertStatus === 'sending' ? 'disabled' : ''}`}
            >
              {alertStatus === 'sending' ? 'กำลังส่งการแจ้งเตือน...' : 'ส่งการแจ้งเตือนฉุกเฉิน'}
            </button>
            
            {alertStatus === 'sending' && (
              <div className="sending-indicator">
                <p>กำลังติดต่อบริการฉุกเฉิน...</p>
              </div>
            )}
          </div>
        </section>
      )}
      
      <div className="back-link">
        <a href="/">&larr; กลับไปหน้าหลัก</a>
      </div>
    </div>
  )
}

export default EmergencyAlert