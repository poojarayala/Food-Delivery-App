import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./register";
import LoginPage from "./login";
import Dashboard from "./dashboard";
import Checkout from "./checkout";
import Payment from "./payment";
import PaymentSelection from "./paymentselection";
import Confirmation from "./confirmation";
import Tracking from "./tracking";
import CategoryItems from "./categoryItems";
import Orders from "./orders";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-selection" element={<PaymentSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/track-order" element={<Tracking />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category/:categoryName" element={<CategoryItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
