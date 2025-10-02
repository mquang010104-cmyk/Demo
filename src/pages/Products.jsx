import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function Products(){
  const {data,loading,error,refetch} = useAxios("/products");
  const [q,setQ] = useState("");
  const filtered = useMemo(()=>{
    if(!data) return [];
    const kw=q.trim().toLowerCase();
    return kw?data.filter(p=>p.title.toLowerCase().includes(kw)):data;
  },[data,q]);
  if(loading) return <p>Đang tải...</p>;
  if(error) return <p>Lỗi: {error.message}</p>;
  return (
    <>
      <h2>Products</h2>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..."/>
      <button onClick={refetch}>Refresh</button>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>
        {filtered.map(p=>(
          <div key={p.id} style={{border:"1px solid #ddd",padding:8}}>
            <img src={p.image} alt={p.title} style={{width:"100%",height:150,objectFit:"contain"}}/>
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </>
  );
}