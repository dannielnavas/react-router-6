import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/MenuComponent";
import { About } from "./pages/AboutPage";
import { Blog } from "./pages/BlogPage";
import { BlogPost } from "./pages/BlogPostPage";
import { Contact } from "./pages/ContactPage";
import { Home } from "./pages/HomePage";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
        <footer></footer>
      </HashRouter>
    </>
  );
}

export default App;
