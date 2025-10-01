import React from "react";

import { useEffect } from "react";
import FormDemo from "./components/FormDemo.jsx";
import { sumRest, destructuringDemo, asyncDemo } from "./utils/es6Demo.js";

export default function App() {
  useEffect(() => {
    // Gọi demo Promise/async khi app mount
    asyncDemo().then((msg) => console.log("asyncDemo:", msg));
  }, []);

  const numsResult = sumRest(1,2,3,4,5);
  const { first, second, others } = destructuringDemo();

  return (
    <div style={{ fontFamily: 'Inter, system-ui, Avenir, Arial', padding: 16 }}>
      <h1>ES6+ & React Hooks Demo</h1>

      <section style={{marginBottom: 16}}>
        <h2>1) ES6+ Highlights</h2>
        <ul>
          <li><strong>Rest operator</strong> + <strong>reduce</strong>: sum(1..5) = {numsResult}</li>
          <li><strong>Destructuring</strong>: first = {first}, second = {second}, others = [{others.join(", ")}]</li>
          <li>Template literal, arrow function, let/const, spread/rest, Promise, async/await (xem console).</li>
        </ul>
      </section>

      <section>
        <h2>2) React Hooks</h2>
        <p>Form quản lý bằng <code>useState</code>, lưu tạm vào <code>localStorage</code> qua <code>useEffect</code>. Custom hook <code>useForm</code> để tái sử dụng logic.</p>
        <FormDemo />
      </section>

      <footer style={{marginTop:24, color:'#666'}}>© 2025 Demo by Bạn</footer>
    </div>
  );
}
