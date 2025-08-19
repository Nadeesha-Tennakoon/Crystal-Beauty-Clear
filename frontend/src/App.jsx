import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/adminPage";
import LoginPage from "./pages/loginPage";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/client/register";
import HomePage from "./pages/homePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <GoogleOAuthProvider clientId="114269803879-ne05lb9s5tp0oo39dj7moq8m6l0ih3r0.apps.googleusercontent.com">
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes path="/*">
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
