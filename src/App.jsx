import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <AllRoutes />
      <Footer />
      <p style={{ textAlign: "center" }}>
        © 2025 CodingExpo Technology. All rights reserved.
      </p>
    </BrowserRouter>
  );
}

export default App;
