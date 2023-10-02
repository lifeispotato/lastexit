import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/home/home";
import { route } from "./route";
import Testament from "../pages/testament/testament";
import Expert from "../pages/expert/expert";
import TestamentAdd from "../pages/testament/testamentAdd";
import TestamentDetail from "../pages/testament/testamentDetail";
import TestamentEdit from "../pages/testament/testamentEdit";
import Coffer from "../pages/coffer/coffer";

const AppRouter = () => {
  return (
    <Routes>
      {/* default */}
      <Route path={route.default} element={<Home />} />

      {/* 홈 */}
      <Route path={route.home} element={<Home />} />

      {/* 금고 */}
      <Route path={route.coffer} element={<Coffer />} />

      {/* 유언 */}
      <Route path={route.testament} element={<Testament />} />
      <Route path={route.testament_add} element={<TestamentAdd />} />
      <Route path={route.testament_edit} element={<TestamentEdit />} />
      <Route path={route.testament_datail} element={<TestamentDetail />} />

      {/* 전문가 */}
      <Route path={route.expert} element={<Expert />} />
    </Routes>
  );
};

export default AppRouter;
