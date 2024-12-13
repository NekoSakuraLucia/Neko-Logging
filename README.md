# neko-logging

<details>
<summary>🇬🇧 English</summary>

`neko-logging` is an Express middleware that simplifies logging HTTP request and response details with customizable features like log formatting, route exclusion, and URL caching to prevent duplicate logs.

## Features
- Logs essential request data such as HTTP Method, URL, Status Code, and Response Time.
- Customizable log format via a custom format function.
- Supports custom transport for sending logs to external systems.
- Exclude specific routes from logging using the `ignoreRoutes` option.
- URL caching system (enabled with `logCache`) to reduce duplicate logs.

## Installation

Use npm or yarn to install this package:

```bash
Not yet published as an official package.
```

## Usage

### Basic Usage

```typescript
import express from "express";
import { NekoLogging } from "neko-logging";

const app = express();

app.use(
  NekoLogging({
    logTime: true,
    logMethod: true,
    logUrl: true,
    logStatus: true,
    logResponseTime: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### Customizable Options

#### Enable URL Caching

```typescript
app.use(
  NekoLogging({
    logCache: true, // Enable URL caching
  })
);
```

#### Define a Custom Format

```typescript
app.use(
  NekoLogging({
    customFormat: (log) => {
      return `[${log.timestamp}] ${log.method} ${log.url} - ${log.responseTime}ms`;
    },
  })
);
```

#### Use a Custom Transport

```typescript
app.use(
  NekoLogging({
    customTransport: async (logData, formattedMessage) => {
      // Send log to an external system
      console.log("Custom Transport: ", formattedMessage);
    },
  })
);
```

#### Exclude Routes from Logging

```typescript
app.use(
  NekoLogging({
    ignoreRoutes: ["/health", "/metrics"],
  })
);
```

## Contributing

We welcome contributions! To contribute to `neko-logging`, please follow these steps:

1. Fork this repository.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/NekoSakuraLucia/Neko-Logging.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/new-feature
   ```
5. Make your changes and write unit tests if applicable.
6. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
7. Open a Pull Request (PR) to the main repository.

## License

`neko-logging` is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

</details>

<details>
<summary>🇹🇭 ภาษาไทย</summary>

`neko-logging` เป็น middleware สำหรับ Express ที่ช่วยให้สามารถบันทึกข้อมูลเกี่ยวกับ HTTP requests และ responses ได้อย่างสะดวกและยืดหยุ่น โดยมีฟีเจอร์ที่สามารถปรับแต่งได้ เช่น การจัดรูปแบบ log การข้ามเส้นทางที่ไม่ต้องการ log และการเปิดใช้งานระบบแคช URL เพื่อหลีกเลี่ยงการบันทึก log ซ้ำ

## คุณสมบัติ
- บันทึกข้อมูลสำคัญของคำขอ (Request) เช่น HTTP Method, URL, Status Code และ Response Time
- ปรับแต่งรูปแบบ log ด้วย custom format function
- สนับสนุนระบบ custom transport สำหรับส่ง log ไปยังระบบภายนอก
- ข้ามการ log routes บางเส้นทางด้วยตัวเลือก `ignoreRoutes`
- ระบบแคช URL (เมื่อเปิดใช้งาน `logCache`) เพื่อลดการ log ซ้ำ

## การติดตั้ง

ใช้ npm หรือ yarn เพื่อติดตั้งแพ็คเกจนี้:

```bash
ยังไม่มีการเผยแพร่แพ็กเกจอย่างจริงจัง
```

## วิธีการใช้งาน

### การใช้งานพื้นฐาน

```typescript
import express from "express";
import { NekoLogging } from "neko-logging";

const app = express();

app.use(
  NekoLogging({
    logTime: true,
    logMethod: true,
    logUrl: true,
    logStatus: true,
    logResponseTime: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### ตัวเลือกที่ปรับแต่งได้

#### เปิดใช้งานระบบแคช URL

```typescript
app.use(
  NekoLogging({
    logCache: true, // เปิดใช้งานระบบแคช URL
  })
);
```

#### กำหนด custom format

```typescript
app.use(
  NekoLogging({
    customFormat: (log) => {
      return `[${log.timestamp}] ${log.method} ${log.url} - ${log.responseTime}ms`;
    },
  })
);
```

#### ใช้ custom transport

```typescript
app.use(
  NekoLogging({
    customTransport: async (logData, formattedMessage) => {
      // ส่ง log ไปยังระบบภายนอก
      console.log("Custom Transport: ", formattedMessage);
    },
  })
);
```

#### ข้ามเส้นทางที่ไม่ต้องการ log

```typescript
app.use(
  NekoLogging({
    ignoreRoutes: ["/health", "/metrics"],
  })
);
```

## การมีส่วนร่วม

เรายินดีต้อนรับ Contributions! หากคุณต้องการช่วยพัฒนา `neko-logging` กรุณาทำตามขั้นตอนดังนี้:

1. Fork Repository นี้
2. Clone Repository มายังเครื่องของคุณ:
   ```bash
   git clone https://github.com/NekoSakuraLucia/Neko-Logging.git
   ```
3. ติดตั้ง Dependencies:
   ```bash
   npm install
   ```
4. สร้าง Branch ใหม่สำหรับ Feature หรือ Bugfix ของคุณ:
   ```bash
   git checkout -b feature/new-feature
   ```
5. แก้ไขโค้ดและเขียน Unit Tests หากจำเป็น
6. Commit และ Push การเปลี่ยนแปลงของคุณ:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
7. เปิด Pull Request (PR) ใน Repository หลัก

## ใบอนุญาต

`neko-logging` ได้รับอนุญาตภายใต้ MIT License ดูรายละเอียดในไฟล์ [LICENSE](LICENSE)

</details>

