import { useTranslation } from "react-i18next";
import "./Home.css";
import SearchInput from "../../components/SearchInput/SearchInput";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-6 w-100 d-flex h-100">
            <div className="home-container">
              <h1 className="home-title">{t("Track.Tracking")}</h1>
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
