import React from "react";
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
import SignUp from "./views/SignUp.jsx";
import Categoria from "./views/Categoria.jsx";
import HeaderBody from "./components/HeaderBody.jsx";
import RegistroNuevoMueble from "./views/RegistroNuevoMueble.jsx";
import DetalleMueble from "./components/DetalleMueble.jsx";
import ConfigurarCuenta from "./views/ConfigurarCuenta.jsx";
import FormPasarela from "./views/FormPasarela.jsx";
import BotonUelz from "./components/BotonUelz.jsx";

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
useEffect(() => {
  const script = document.createElement("script");
  script.src =
    "https://uelzpay-widget-cdn-demo.vercel.app/v1.0.0/uelz-widget.js?uelz-api-key=clz33572s0011q9012o9abjif&uelz-api-url=https://widget.demo.uelzpay.com";
  script.async = true;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}, []);
const MainContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/SignUp";

  return (
    <>
      {showNavbar && <Navbar />}
      <BotonUelz />

      <HeaderBody />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/categoria/:name" element={<Categoria />} />
        <Route path="/NuevoMueble" element={<RegistroNuevoMueble />} />
        <Route path="/VistaMueble" element={<DetalleMueble />} />
        <Route path="/ConfigurarCuenta" element={<ConfigurarCuenta />} />
        <Route path="/FormPasarela" element={<FormPasarela />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
      <BotonUelz />
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
