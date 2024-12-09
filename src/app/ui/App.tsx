import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthPage } from '../../pages/AuthPage';
import { HomePage } from '../../pages/HomePage';
import { getCookie } from '../../shared/lib';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const authCookie = getCookie('authorization');
  return authCookie ? children : <Navigate to="/auth" />;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};
