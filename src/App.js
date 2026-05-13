import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Cases from "./pages/Cases";
import AddCase from "./pages/AddCase";
import CaseDetails from "./pages/CaseDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CompletedCases from "./pages/CompletedCases";
import PendingCases from "./pages/PendingCases";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Routes>

        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route
          path="/login"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" replace />
              : <Login onLogin={handleLogin} />
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" replace />
              : <Signup onSignup={handleLogin} />
          }
        />

        {/* ---------- PROTECTED LAYOUT ---------- */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <Header onLogout={handleLogout} />
                <Home onLogout={handleLogout} />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          {/* Nested Pages (render inside Home via Outlet) */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="cases" element={<Cases />} />
          <Route path="cases/add" element={<AddCase />} />
          <Route path="cases/:id" element={<CaseDetails />} />
          <Route path="cases/pending" element={<PendingCases />} />
          <Route path="cases/completed" element={<CompletedCases />} />
          <Route path="about" element={<About />} />

          {/* ✅ PASS LOGOUT TO PROFILE */}
          <Route
            path="profile"
            element={<Profile onLogout={handleLogout} />}
          />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
