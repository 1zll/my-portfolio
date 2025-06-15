// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout.jsx"
import ScrollToTop from "./components/ScrollToTop";
import theme from "./theme/theme.js";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Project from "./pages/Project.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <ScrollToTop/>
        <Layout>
          <Routes>
          <Route index element={<Navigate to="/start" replace />} />            <Route path="/start" element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects/:slug" element={<Project />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);