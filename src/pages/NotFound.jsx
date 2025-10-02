import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return <div><h2>404 - Not found</h2><Link to="/">Về Home</Link></div>;
}