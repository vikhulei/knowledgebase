import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Global Styles
import GlobalStyles from "./design/global/GlobalStyles";

// Shared Layout
import Header from "./components/layout/header/Header";

// Main Knowledge Base
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import ArticlePage from "./pages/article/ArticlePage";
import SearchResults from "./pages/search/SearchResults";

// Authentication
import Login from "./pages/auth/login/LoginPage";
import ForgotPassword from "./pages/auth/forgotPassword/ForgotPasswordPage";
import ResetPassword from "./pages/auth/resetPassword/ResetPasswordPage";

// Admin Portal
import AdminDashboard from "./pages/adminPortal/dashboard/AdminDashboard";
import AllArticles from "./pages/adminPortal/allArticles/AllArticles";
import ArticleEditor from "./pages/adminPortal/articleEditor/ArticleEditor";
import CategoryManagement from "./pages/adminPortal/categories/CategoryManagement";
import ManageUsers from "./pages/adminPortal/users/ManageUsers";
import Statistics from "./pages/adminPortal/statistics/Statistics";
import Settings from "./pages/adminPortal/settings/Settings";

// Development / Testing
import UIShowcase from "./pages/test/UIShowcase";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          {/* Main Knowledge Base */}
          <Route path="/" element={<Home />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/search" element={<SearchResults />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Admin Portal */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/articles" element={<AllArticles />} />
          <Route path="/admin/articles/new" element={<ArticleEditor />} />
          <Route path="/admin/articles/:id/edit" element={<ArticleEditor />} />
          <Route path="/admin/categories" element={<CategoryManagement />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/statistics" element={<Statistics />} />
          <Route path="/admin/settings" element={<Settings />} />

          {/* Development */}
          <Route path="/test" element={<UIShowcase />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
