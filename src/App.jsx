import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Explore from "./pages/Explore";
import EventSelected from "./pages/EventSelected";
import Account from "./pages/Account";
import AccountInformation from "./pages/AccountInformation";
import MyEvents from "./pages/MyEvents";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import Support from "./pages/Support";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/EventSelected" element={<EventSelected />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Account/information" element={<AccountInformation />} />
        <Route path="/Account/events" element={<MyEvents />} />
        <Route path="/Account/events/thisEvent" element={<EventDetails />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  )
}

export default App
