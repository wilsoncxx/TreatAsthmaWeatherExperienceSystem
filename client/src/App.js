import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import WeatherPage from "./pages/Weather";
import GinaTestPage from "./pages/GinaTest";
import RecordsPage from "./pages/Records";
import StatisticsPage from "./pages/Statistics";
import { useEffect, useState } from "react";

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     fetch("http://localhost:5000/auth/login/success", {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<WeatherPage />}
            // element={user ? <WeatherPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
            // element={user ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={<SignupPage />}
            // element={user ? <Navigate to="/" /> : <SignupPage />}
          />
          <Route
            path="/gina-test"
            element={<GinaTestPage />}
            // element={user ? <Navigate to="/" /> : <SignupPage />}
          />
          <Route
            path="/records"
            element={<RecordsPage />}
            // element={user ? <Navigate to="/" /> : <SignupPage />}
          />
          <Route
            path="/statistics"
            element={<StatisticsPage />}
            // element={user ? <Navigate to="/" /> : <SignupPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
