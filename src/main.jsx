import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme/theme.js";
import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop";

const basename =
  import.meta.env.MODE === "production" ? "/my-portfolio" : undefined;
  
// 共通ページ
import Start from "./pages/Start.jsx";
import Project from "./pages/Project.jsx";

// 就活用ページ
import JobHome from "./pages/job/Home.jsx";
import JobProfile from "./pages/job/Profile.jsx";

// 公開用ページ
import PublicHome from "./pages/public/Home.jsx";
import PublicProfile from "./pages/public/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* GitHub Pagesで /my-portfolio 以下にデプロイするなら basenameを設定 */}
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* 共通 */}
            <Route path="/" element={<Start />} />
            
            {/* 公開用 */}
            <Route path="/home" element={<PublicHome />} />
            <Route path="/profile" element={<PublicProfile />} />
            <Route path="/projects/:slug" element={<Project />} />

            {/* 就活用 */}
            <Route path="/job/home" element={<JobHome />} />
            <Route path="/job/profile" element={<JobProfile />} />
            <Route path="/job/projects/:slug" element={<Project />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);