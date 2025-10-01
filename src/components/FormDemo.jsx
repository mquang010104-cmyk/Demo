import React from "react";
import { useEffect } from "react";
import useForm from "../hooks/useForm.js";

export default function FormDemo() {
  const { values, handleChange, reset } = useForm(() => ({
    name: "",
    email: "",
    note: ""
  }));

  // Lưu vào localStorage khi values thay đổi
  useEffect(() => {
    localStorage.setItem("formDemo", JSON.stringify(values));
  }, [values]);

  // Khôi phục dữ liệu nếu có
  useEffect(() => {
    const saved = localStorage.getItem("formDemo");
    if (saved) {
      try {
        const obj = JSON.parse(saved);
        // nạp lại state bằng cách cập nhật từng trường
        Object.entries(obj).forEach(([k,v]) => {
          handleChange({ target: { name: k, value: v } });
        });
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gửi form:\n- Tên: ${values.name}\n- Email: ${values.email}\n- Ghi chú: ${values.note}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'grid', gap: 10, maxWidth: 420}}>
      <label>
        Tên
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Nhập tên..."
          required
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </label>

      <label>
        Ghi chú
        <textarea
          name="note"
          value={values.note}
          onChange={handleChange}
          placeholder="Ghi chú ngắn..."
          rows={3}
        />
      </label>

      <div style={{display:'flex', gap:8}}>
        <button type="submit">Gửi</button>
        <button type="button" onClick={reset}>Xoá dữ liệu</button>
      </div>
    </form>
  );
}
