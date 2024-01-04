import "./styling/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TicketsPage from "./pages/TicketsPage";
import Errors from "./components/Errors";
import ProfilePage from "./pages/ProfilePage";
import SuccessPage from "./pages/SuccessPage";
import SingleTicketPage from "./pages/SingleTicketPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/concerts" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/register/success" element={<SuccessPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/mytickets" element={<TicketsPage />}></Route>
        <Route path="/ticket/1" element={<SingleTicketPage />}></Route>
        <Route
          path="/*"
          element={<Errors msg={"path not found"} status={404} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
