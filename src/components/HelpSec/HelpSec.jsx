import { useTranslation } from "react-i18next";
import "./HelpSec.css";

function HelpSec() {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex flex-wrap ship-status-help">
        <div>
          {/* <img style={{ width: 80 + "px" }} src={help} alt="help" /> */}
        </div>
        <div>
          <p>{t("Tracking.problem")}</p>
          <button>{t("Tracking.report")}</button>
        </div>
      </div>
    </>
  );
}

export default HelpSec;
