import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import Aml from "./Pages/AML";
import Payments from "./Pages/Payments";
import Clearing from "./Pages/Clearing";
import Tokenization from "./Pages/Tokenization";
import PaymentGateway from "./Pages/PaymentGateway";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/aml-ctf" Component={Aml} />
        <Route path="/payment" Component={Payments} />
        <Route path="/clearing-settlement" Component={Clearing} />
        <Route path="/tokenization" Component={Tokenization}/>
        <Route path="/payment-gateway" Component={PaymentGateway}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
