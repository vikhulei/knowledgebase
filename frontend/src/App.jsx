import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./design/global/GlobalStyles";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./pages/home/Home";
import UIShowcace from "./pages/test/UIShowcase"
import AdminPortal from "./pages/adminPortal/AdminPortal";

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Header />
      <UIShowcace />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
