import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthPage } from '../../pages/AuthPage';
import { HomePage } from '../../pages/HomePage';

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

export const App = () => {
  const [token, setToken] = useState<string | null>(getCookie('authorization'));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentToken = getCookie('authorization');
      if (currentToken !== token) {
        setToken(currentToken);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [token]);

  return (
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
  );
};
