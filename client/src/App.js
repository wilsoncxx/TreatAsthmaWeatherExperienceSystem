import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import WeatherPage from "./pages/Weather";
import GinaTestPage from "./pages/GinaTest";
import RecordsPage from "./pages/Records";
import StatisticsPage from "./pages/Statistics";
import { AuthProvider } from "./services/AuthService";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPasswordPage from "./pages/ForgotPassword";
import UpdateProfilePage from "./pages/UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <WeatherPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/gina-test"
            element={
              <PrivateRoute>
                <GinaTestPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/records"
            element={
              <PrivateRoute>
                <RecordsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute>
                <StatisticsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
