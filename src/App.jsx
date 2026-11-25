import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DashboardPage from './pages/DashboardPage';
import TablesBasicPage from './pages/TablesBasicPage';
import FormsPage from './pages/FormsPage';
import ButtonsAlertsPage from './pages/ButtonsAlertsPage';
import BlankPage from './pages/BlankPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/tables" element={<TablesBasicPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/buttons" element={<ButtonsAlertsPage />} />
          <Route path="/blank" element={<BlankPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
