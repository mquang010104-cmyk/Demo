import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function ProductDetail(){
  const {id} = useParams();
  const nav=useNavigate();
  const {data,loading,error}=useAxios(`/products/${id}`);
  if(loading) return <p>Đang tải chi tiết...</p>;
  if(error) return <p>Lỗi: {error.message}</p>;
  if(!data) return <p>Không tìm thấy.</p>;
  return (
    <>
      <button onClick={()=>nav(-1)}>← Quay lại</button>
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} style={{width:200}}/>
      <p>{data.description}</p>
      <b>${data.price}</b>
    </>
  );
}