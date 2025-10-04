# ES6 + React Hooks Demo

Mini repo phục vụ báo cáo: 
- **Task 1 – JS ES6+**: let/const, arrow function, template literal, destructuring, spread/rest, Promise + async/await.  
- **Task 2 – React Hooks**: `useState`, `useEffect`, `useMemo`, `useCallback` + custom hook `useForm`, `useAxios`.  
- **Task 3 – React Router DOM**: Routing Home / Products / Product Detail / NotFound.  
- **Task 4 – Axios**: Gọi API FakeStore, quản lý loading + error, có refresh và search filter.  

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
  components/
    FormDemo.jsx
  hooks/
    useForm.js
    useAxios.js
  pages/
    Products.jsx
    ProductDetail.jsx
    NotFound.jsx
  utils/
    es6Demo.js
index.html
package.json
vite.config.js
```

## Ghi chú
- `utils/es6Demo.js` chứa các ví dụ ES6+: rest/spread, destructuring, template literals, Promise/async.
- `FormDemo.jsx` minh hoạ quản lý form với `useState`, lưu `localStorage` bằng `useEffect`.
- `useForm.js` là **custom hook** tái sử dụng cho các form khác.
- 'useAxios.js' là **custom hook** để gọi API, quản lý loading/error và cho phép refetch.
- Products.jsx hiển thị danh sách sản phẩm từ API + search filter + refresh, dùng useMemo để tối ưu filter.
- ProductDetail.jsx hiển thị chi tiết sản phẩm theo id từ URL.
