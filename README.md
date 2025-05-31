# Copilot Demo Health Dashboard

โปรเจกต์นี้เป็น Health Dashboard สำหรับคำนวณและแสดงข้อมูลสุขภาพพื้นฐาน เช่น BMI, ปริมาณแคลอรี่ที่ควรได้รับต่อวัน, ปริมาณน้ำ, โปรตีน, BMR และ % Body Fat โดยใช้ HTML, CSS (Tailwind), JavaScript และรองรับ Unit Test ด้วย Node.js

## ฟีเจอร์
- ระบบ Login (username: `demo`, password: `dome`)
- Dashboard แสดงผลสุขภาพหลัง Login
- คำนวณ BMI, หมวดหมู่ BMI
- คำนวณปริมาณแคลอรี่ที่ควรได้รับต่อวัน (TDEE)
- คำนวณปริมาณน้ำที่ควรดื่มต่อวัน
- คำนวณปริมาณโปรตีนที่ควรได้รับต่อวัน
- คำนวณ BMR (Basal Metabolic Rate)
- คำนวณ % Body Fat (โดยประมาณ)
- ออกแบบ UI ด้วย Tailwind CSS
- มี Unit Test สำหรับฟังก์ชันหลัก (Node.js)

## วิธีใช้งาน
1. เปิดไฟล์ `index.html` ด้วย Browser เพื่อใช้งาน Dashboard
2. หากต้องการรัน Unit Test:
   - ติดตั้ง Node.js
   - เปิด Terminal ที่โฟลเดอร์โปรเจกต์
   - รันคำสั่ง:
     ```sh
     npm install
     npm test
     ```

## โครงสร้างโปรเจกต์
```
index.html         // หน้าเว็บหลัก
styles.css         // ไฟล์ CSS (import Tailwind)
logic.js           // ฟังก์ชัน logic สำหรับคำนวณและ validation
logic.test.js      // Unit Test สำหรับ logic.js
package.json       // ข้อมูลโปรเจกต์และสคริปต์ test
```

## License
MIT
