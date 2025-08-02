import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Navbar />
      <AllRoutes />
      <Footer />
      <p style={{ textAlign: "left", color: "#696969", "margin-left": "20px" }}>
        © 2025 CodingExpo Technology. All rights reserved.
      </p>
    </BrowserRouter>
  );
}

export default App;
