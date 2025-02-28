import { useEffect, Suspense, lazy } from 'react';
import { Layout } from './modules/layout/components/Layout'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const DashboardPage = lazy(() => import('./modules/analytics/components/DashboardPage').then(module => ({ default: module.DashboardPage })));
const SettingPage = lazy(() => import('./modules/setting/components/SettingPage').then(module => ({ default: module.SettingPage })));
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<RedirectToDashboard />} />
          <Route element={<Layout />}>
            <Route 
              path="dashboard" 
              element={
                <Suspense fallback={<>...</>}>
                  <DashboardPage />
                </Suspense>
              }
            />
            <Route 
              path="setting" 
              element={
                <Suspense fallback={<>...</>}>
                  <SettingPage />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<RedirectToDashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
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
