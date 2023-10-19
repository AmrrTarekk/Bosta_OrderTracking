import { useTranslation } from "react-i18next";
import "./App.css";
import axiosDefault from "./utilities/api";
import { useEffect } from "react";
// import { changeLanguage } from "i18next";
// import { useDispatch, useSelector } from "react-redux";
// import { translate } from "./redux/slices/languageSlice";
// import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const lang = useSelector((state) => state.language.lang);
  // const dispatch = useDispatch();

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

  const { t } = useTranslation();
  // const handleClick = () => {
  //   dispatch(translate());
  //   changeLanguage(lang);
  // };
  return (
    <div className={t("class")}>
      <NavBar />
      {/* <Routes> */}
      {/* <Route path="/" element={<Layout />}>
          <Route path="order-tracking/" element={<Shipment />} />
        </Route> */}
      {/* </Routes> */}
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
