import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/MenuComponent";
import { About } from "./pages/AboutPage";
import { Contact } from "./pages/ContactPage";
import { Home } from "./pages/HomePage";
import { Services } from "./pages/ServicesPage";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
        <footer></footer>
      </HashRouter>
    </>
  );
}

export default App;
