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
import PhotoExpert from "../pages/expert/photoExpert";
import Contact from "../pages/expert/contact";
import InheritanceExpert from "../pages/expert/inheritanceExpert";
import NursingExpert from "../pages/expert/nursingExpert";
import FuneralExpert from "../pages/expert/funeralExpert";
import Library from "../pages/library/library";
import LibraryAdd from "../pages/library/libraryAdd";
import LibraryDetail from "../pages/library/libraryDetail";
import LibraryEdit from "../pages/library/libraryEdit";
import Join from "../pages/join/join";
import JoinComplete from "../pages/join/joinComplete";
import Login from "../pages/login/login";
import FindId from "../pages/login/findId";
import FindPw from "../pages/login/findPw";
import FindPwComplete from "../pages/login/findPwComplete";
import ExpertContact from "../pages/expert/expertContact";
import ExpertPayment from "../pages/expert/expertPayment";
import More from "../pages/more/more";
import Terms from "../pages/more/terms";
import Policy from "../pages/more/policy";

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
      <Route path={route.testament_edit + "/:id"} element={<TestamentEdit />} />
      <Route path={route.testament_detail + "/:id"} element={<TestamentDetail />} />

      {/* 서재 */}
      <Route path={route.library} element={<Library />} />
      <Route path={route.library_add} element={<LibraryAdd />} />
      <Route path={route.library_edit + "/:id"} element={<LibraryEdit />} />
      <Route path={route.library_detail + "/:id"} element={<LibraryDetail />} />

      {/* 전문가 */}
      <Route path={route.expert} element={<Expert />} />
      <Route path={route.expert_photo} element={<PhotoExpert />} />
      <Route path={route.expert_inheritance} element={<InheritanceExpert />} />
      <Route path={route.expert_nursing} element={<NursingExpert />} />
      <Route path={route.expert_funeral} element={<FuneralExpert />} />

      {/* 상담 */}
      <Route path={route.contact} element={<Contact />} />
      <Route path={route.contact_expert} element={<ExpertContact />} />
      <Route path={route.contact_payment} element={<ExpertPayment />} />

      {/* 회원가입 */}
      <Route path={route.login} element={<Login />} />
      <Route path={route.login_find_id} element={<FindId />} />
      <Route path={route.login_find_pw} element={<FindPw />} />
      <Route path={route.login_find_pw_complete} element={<FindPwComplete />} />
      <Route path={route.join} element={<Join />} />
      <Route path={route.join_complete} element={<JoinComplete />} />

      {/* 더보기 */}
      <Route path={route.more} element={<More />} />
      <Route path={route.terms} element={<Terms />} />
      <Route path={route.policy} element={<Policy />} />
    </Routes>
  );
};

export default AppRouter;
