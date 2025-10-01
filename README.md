# ES6 + React Hooks Demo

Mini repo phục vụ báo cáo: 
- **Task 1 – JS ES6+**: let/const, arrow function, template literal, destructuring, spread/rest, Promise + async/await.
- **Task 2 – React Hooks**: `useState`, `useEffect` + custom hook `useForm` để tái sử dụng logic quản lý form.

## Chạy dự án
```bash
npm i
npm run dev
```

Mở theo URL Vite hiển thị trên terminal.

## Cấu trúc
```
src/
  App.jsx
  main.jsx
  components/FormDemo.jsx
  hooks/useForm.js
  utils/es6Demo.js
index.html
package.json
```

## Ghi chú
- `utils/es6Demo.js` chứa các ví dụ ES6+: rest/spread, destructuring, template literals, Promise/async.
- `FormDemo.jsx` minh hoạ quản lý form với `useState`, lưu `localStorage` bằng `useEffect`.
- `useForm.js` là **custom hook** tái sử dụng cho các form khác.
- Bạn có thể chụp ảnh màn hình phần form và console log để đính vào Google Doc.
