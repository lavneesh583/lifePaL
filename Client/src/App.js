import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <MainPage />
            <Footer />
          </div>
        }
      />
      <Route
        path="/profile"
        element={
          <div>
            <Navbar />
            <Profile />
            <Footer />
          </div>
        }
      />
      <Route path="sign_in" element={<SignIn />} />
      <Route path="sign_up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
