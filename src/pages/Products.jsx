import React, { useMemo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function Products() {
  const [q, setQ] = useState("");

  // Gọi API lấy danh sách sản phẩm
  const { data, loading, error, refetch } = useAxios("/products");

  // useCallback: tránh tạo lại hàm refetch nhiều lần
  const handleRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  // useMemo: tối ưu filter danh sách sản phẩm
  const filtered = useMemo(() => {
    if (!data) return [];
    const kw = q.trim().toLowerCase();
    return kw ? data.filter((p) => p.title.toLowerCase().includes(kw)) : data;
  }, [data, q]);

  if (loading)
    return (
      <p style={{ color: "blue", fontWeight: "bold" }}>⏳ Đang tải sản phẩm...</p>
    );
  if (error)
    return (
      <p style={{ color: "red" }}>
        ❌ Lỗi tải dữ liệu: {error.message}.{" "}
        <button onClick={handleRefetch}>Thử lại</button>
      </p>
    );

  return (
    <>
      <h2>Products</h2>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search..."
        style={{ marginRight: "8px", padding: "4px" }}
      />
      <button onClick={handleRefetch}>🔄 Refresh</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: 16,
          marginTop: 16,
        }}
      >
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: 8,
              borderRadius: "6px",
              background: "#fafafa",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", height: 150, objectFit: "contain" }}
            />
            <h4 style={{ fontSize: "14px", minHeight: "40px" }}>{p.title}</h4>
            <p>
              <b>${p.price}</b>
            </p>
            <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </>
  );
}
