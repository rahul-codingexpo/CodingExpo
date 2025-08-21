// import { BrowserRouter } from "react-router-dom";
// import AllRoutes from "./routes";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import ScrollToTop from "./components/ScrollToTop";
// import Copyright from "./components/copyright";
// import "./App.css";
// import { useState } from "react";
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Header />
//       <Navbar />
//       <AllRoutes
//         isAuthenticated={isAuthenticated}
//         setIsAuthenticated={setIsAuthenticated}
//       />
//       <Footer />
//       <Copyright />
//     </BrowserRouter>
//   );
// }

// export default App;

/*Updated with removing header and footer from admin login page and dashboard page*/

import { BrowserRouter, useLocation } from "react-router-dom";
import AllRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Copyright from "./components/copyright";
import "./App.css";
import { useState } from "react";

function Layout({ children }) {
  const location = useLocation();

  // Pages where Header, Navbar, Footer should NOT be shown
  const noLayoutRoutes = ["/login", "/admin"];

  const hideLayout = noLayoutRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
      {!hideLayout && <Copyright />}
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AllRoutes
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
