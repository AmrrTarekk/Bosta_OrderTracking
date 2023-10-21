import { useTranslation } from "react-i18next";
import "./HelpSec.css";

function HelpSec() {
  const { t } = useTranslation();
  return (
    <>
      <div className="shipment-issues d-flex flex-wrap align-items-center justify-content-center gap-4 mt-3 py-4">
        <img src="/images/helpSec.jpg" alt="helpSec" />
        <div>
          <p>{t("Tracking.problem")}</p>
          <button>{t("Tracking.report")}</button>
        </div>
      </div>
    </>
  );
}

export default HelpSec;
