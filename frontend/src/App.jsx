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
import TransferPage from "./pages/TransferPage";
import ConcertPage from "./pages/ConcertPage";
import BuyPage from "./pages/BuyPage";
import BuySuccessfulPage from "./pages/BuySuccessfulPage";
import BuyUnsuccessfulPage from "./pages/BuyUnsuccessfulPage";

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
        <Route
          path="/mytickets/:ticket_id"
          element={<SingleTicketPage />}
        ></Route>
        <Route
          path="/ticket/:ticket_id/transfer"
          element={<TransferPage />}
        ></Route>
        <Route path="/concerts/:concert_id" element={<ConcertPage />}></Route>
        <Route path="/concerts/:concert_id/buy" element={<BuyPage />}></Route>
        <Route
          path="/concerts/:concert_id/buy/successful"
          element={<BuySuccessfulPage />}
        ></Route>
        <Route
          path="/concerts/:concert_id/buy/unsuccessful"
          element={<BuyUnsuccessfulPage />}
        ></Route>
        <Route
          path="/*"
          element={<Errors msg={"path not found"} status={404} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
