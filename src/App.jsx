import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import FormDemo from "./components/FormDemo.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import { sumRest, destructuringDemo, asyncDemo } from "./utils/es6Demo.js";

export default function App() {
  React.useEffect(() => {
    asyncDemo().then(console.log);
  }, []);

  const numsResult = sumRest(1, 2, 3, 4, 5);
  const { first, second, others } = destructuringDemo();

  return (
    <div style={{ fontFamily: "Arial", padding: 16 }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h1 style={{ margin: 0 }}>ES6+ & React Hooks Demo</h1>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section>
                <h2>1) ES6+ Highlights</h2>
                <ul>
                  <li>
                    <b>Rest + reduce:</b> sum(1..5) = {numsResult}
                  </li>
                  <li>
                    <b>Destructuring:</b> first = {first}, second = {second},
                    others = [{others.join(", ")}]
                  </li>
                  <li>
                    Template literal, arrow function, let/const, spread/rest,
                    Promise/async (xem console).
                  </li>
                </ul>
              </section>
              <section>
                <h2>2) React Hooks</h2>
                <FormDemo />
              </section>
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer style={{ marginTop: 24, color: "#666" }}>
        © {new Date().getFullYear()} Demo by Bạn
      </footer>
    </div>
  );
}
