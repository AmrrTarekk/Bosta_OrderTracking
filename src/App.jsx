import { useTranslation } from "react-i18next";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import ShipmentDetails from "./pages/shimpment/ShipmentDetails";
import { useSelector } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  return (
    <HelmetProvider>
      <div className={`${t("langDir")} app`}>
        <Helmet htmlAttributes={{ lang: lang }} />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="order-tracking/:id" element={<ShipmentDetails />} />
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
