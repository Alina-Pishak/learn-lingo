// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/teachers" element={<TeachersPage />} />
    </Routes>
  );
};

export default App;
