import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProtectedRoute, AuthProvider } from "./auth";
import { Menu } from "./components/MenuComponent";
import { About } from "./pages/AboutPage";
import { Blog } from "./pages/BlogPage";
import { BlogPost } from "./pages/BlogPostPage";
import { Contact } from "./pages/ContactPage";
import { Dashboard } from "./pages/DashboardPage";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/LoginPage";
import { Logout } from "./pages/LogoutPage";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="contact" element={<Contact />} />

            <Route path="login" element={<Login />} />
            <Route
              path="logout"
              element={
                <AuthProtectedRoute>
                  <Logout />
                </AuthProtectedRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <AuthProtectedRoute>
                  <Dashboard />
                </AuthProtectedRoute>
              }
            />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
          <footer></footer>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
