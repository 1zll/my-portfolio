import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Routes, Route, HashRouter } from "react-router-dom";
import theme from "./theme/theme.js";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop";

// 共通ページ
import Start from "./pages/Start.jsx";
import Project from "./pages/Project.jsx";

// 就活用ページ（本番）
import JobHome from "./pages/job/Home.jsx";
import JobProfile from "./pages/job/Profile.jsx";

// 公開用ページ（個人情報なし）
import PublicHome from "./pages/public/Home.jsx";
import PublicProfile from "./pages/public/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter basename="/my-portfolio">
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* 公開用ルート */}
            <Route path="/public/*">
              <Route path="home" element={<PublicHome />} />
              <Route path="profile" element={<PublicProfile />} />
              <Route path="projects/:slug" element={<Project />} />
            </Route>

            {/* 就活用ルート */}
            <Route path="/job/*">
              <Route path="home" element={<JobHome />} />
              <Route path="profile" element={<JobProfile />} />
              <Route path="projects/:slug" element={<Project />} />
            </Route>

            {/* 共通ルート */}
            <Route path="/" element={<Start />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
