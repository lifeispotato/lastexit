import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/home/home";
import { route } from "./route";
import Testament from "../pages/testament/testament";
import Expert from "../pages/expert/expert";
import TestamentAdd from "../pages/testament/testamentAdd";

const AppRouter = () => {
  return (
    <Routes>
      {/* default */}
      <Route path={route.default} element={<Home />} />

      {/* 홈 */}
      <Route path={route.home} element={<Home />} />

      {/* 유언 */}
      <Route path={route.testament} element={<Testament />} />
      <Route path={route.testament_add} element={<TestamentAdd />} />

      {/* 전문가 */}
      <Route path={route.expert} element={<Expert />} />
    </Routes>
  );
};

export default AppRouter;
