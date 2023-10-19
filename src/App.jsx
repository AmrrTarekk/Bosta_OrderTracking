import { useTranslation } from "react-i18next";
import "./App.css";
import axiosDefault from "./utilities/api";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  const { t } = useTranslation();
  const fn = async () => {
    await axiosDefault
      .get("7234258")
      .then(({ data }) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fn();
  }, []);

  return (
    <div className={t("class")}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="order-tracking/" element={<Shipment />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{
  /* <div>
<button onClick={handleClick}>{lang}</button>
<div>{t("header.Track.Tracking")}</div>
</div> */
}
