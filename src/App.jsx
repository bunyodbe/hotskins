import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Login } from "./components";
import { Home, Signup, Pruducts } from "./pages";

const App = () => (
  <>
    <Login />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pruducts" element={<Pruducts />} />
    </Routes>
    <Footer />
  </>
);

export default App;
