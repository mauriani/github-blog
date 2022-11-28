import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { PostDetails } from "../pages/PostDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/posts" element={<PostDetails />}></Route>
    </Routes>
  );
}
