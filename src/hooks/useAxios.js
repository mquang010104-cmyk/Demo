import { useEffect, useState, useCallback } from "react";
import axiosClient from "../api/axiosClient";

export default function useAxios(url, { enabled=true }={}){
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(enabled);
  const [error,setError] = useState(null);
  const fetchData = useCallback(async()=>{
    setLoading(true); setError(null);
    try{
      const res = await axiosClient.get(url);
      setData(res.data);
    }catch(e){ setError(e); }
    finally{ setLoading(false); }
  },[url]);
  useEffect(()=>{ if(enabled) fetchData(); },[enabled,fetchData]);
  return {data,loading,error,refetch:fetchData};
}