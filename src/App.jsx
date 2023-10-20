import { useTranslation } from "react-i18next";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import NavBar from "./components/navbar";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import ShipmentDetails from "./pages/shimpment/ShipmentDetails";

function App() {
  const { t } = useTranslation();
  // const fn = async () => {
  //   await axiosDefault
  //     .get("7234258")
  //     .then(({ data }) => console.log(data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fn();
  // }, []);

  return (
    <div className={`${t("class")}`}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="order-tracking/:id" element={<ShipmentDetails />} />
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
