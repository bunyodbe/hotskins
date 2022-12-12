import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Login } from "./components";
import { Home, Signup, SelectItems } from "./pages";

const App = () => (
  <>
    <Login />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/items" element={<SelectItems />} />
    </Routes>
    <Footer />
  </>
);

export default App;
