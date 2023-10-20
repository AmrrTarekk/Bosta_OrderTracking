import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import Search from "antd/es/input/Search";

function Home() {
  const { t } = useTranslation();
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const onSearch = () => {
    navigate(`/order-tracking/:${id}`);
  };
  return (
    <div className="home">
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-6 w-100 d-flex h-100">
            <div className="home-container">
              <h1 className="home-title">{t("Track.Tracking")}</h1>
              <Search
                placeholder={t("HomePage.placeholder")}
                onChange={(e) => setId(e.target.value)}
                onSearch={onSearch}
                enterButton
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
