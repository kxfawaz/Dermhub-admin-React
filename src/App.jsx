import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import ConsultationList from "./pages/ConsultationList";
import ConsultationDetail from "./pages/ConsultationDetail";
import AdminQuestions from "./pages/AdminQuestions";
import AdminQuestionDetail from "./pages/AdminQuestionDetail";
import AdminNavbar from "./pages/AdminNavbar";
import AdminLogin from "./pages/AdminLogin";
import "./App.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  function onAdminLogin() {
    setIsAdmin(true);
  }

  function onAdminLogout() {
    setIsAdmin(false);
  }

  function Layout({ children }) {
    const location = useLocation();
    const hideNavbar = location.pathname === "/admin-login";

    return (
      <>
        {!hideNavbar && isAdmin && (
          <AdminNavbar onLogout={onAdminLogout} />
        )}
        {children}
      </>
    );
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* ADMIN LOGIN */}
          <Route
            path="/admin-login"
            element={
              isAdmin ? (
                <Navigate to="/questions" />
              ) : (
                <AdminLogin onLogin={onAdminLogin} />
              )
            }
          />

       
          <Route path="/" element={<Navigate to="/consultations" />} />
          <Route path="/consultations" element={<ConsultationList />} />
          <Route path="/consultations/:id" element={<ConsultationDetail />} />

          {/* ADMIN ROUTES */}
          <Route
            path="/questions"
            element={isAdmin ? <AdminQuestions /> : <Navigate to="/admin-login" />}
          />

          <Route
            path="/questions/:id"
            element={isAdmin ? <AdminQuestionDetail /> : <Navigate to="/admin-login" />}
          />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
