import React, { useState, useEffect, useCallback } from "react";

export default function FormDemo() {
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  // Khôi phục dữ liệu từ localStorage khi mount
  useEffect(() => {
    const saved = localStorage.getItem("form");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  // Lưu dữ liệu vào localStorage khi form thay đổi
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  // useCallback để tránh re-create hàm mỗi lần render
  const onChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const onReset = useCallback(() => {
    setForm({ name: "", email: "", note: "" });
  }, []);

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 300 }}
    >
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Tên"
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email"
      />
      <textarea
        name="note"
        value={form.note}
        onChange={onChange}
        placeholder="Ghi chú..."
      />
      <button type="button" onClick={() => alert(JSON.stringify(form))}>
        Gửi
      </button>
      <button type="button" onClick={onReset}>
        Xoá dữ liệu
      </button>
    </form>
  );
}
