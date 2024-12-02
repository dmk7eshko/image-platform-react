import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthPage } from '../../pages/AuthPage';
import { HomePage } from '../../pages/HomePage';

export const App = () => {
  const token = localStorage.getItem('token');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={token ? <HomePage /> : <Navigate to="/auth" />}
          />

          <Route
            path="/auth"
            element={token ? <Navigate to="/" /> : <AuthPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
