import { useEffect } from 'react';
import { DashboardPage } from './modules/analytics/components/DashboardPage';
import { Layout } from './modules/layout/components/Layout'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { SettingPage } from './modules/setting/components/SettingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToDashboard />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Route>
        <Route path="*" element={<RedirectToDashboard />} />
      </Routes>
    </Router>
  );
}

const RedirectToDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard", { replace: true });
  }, [navigate]);

  return null;
};

export default App
