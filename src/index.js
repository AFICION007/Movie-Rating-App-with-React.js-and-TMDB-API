import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LikesPage from "./LikesPage";
import PagesFetch from "./PagesFetch";

const apiKey = "a722a33aab7c65079a00943b27af9e3a";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PagesFetch apiKey={apiKey} />} />
      <Route path="/likes" element={<LikesPage />} />
    </Routes>
  </BrowserRouter>
);
