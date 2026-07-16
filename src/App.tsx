import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import DashboardPage from "./pages/dashboard/dashboard-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}