import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "/src/views/Home.jsx";
import Navbar from "./components/NavBar.jsx";
import FooterBody from "./components/FooterBody.jsx";
import injectContext from "./context/appContext.jsx";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import RegistrationForm from "./views/SignUp.jsx";


i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});


const MainContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/Registro';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<RegistrationForm />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
      <FooterBody />
    </>
  );
};

const Layout = () => {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <ScrollToTop>
            <MainContent />
          </ScrollToTop>
        </BrowserRouter>
      </I18nextProvider>
    </React.StrictMode>
  );
};


export default injectContext(Layout);
