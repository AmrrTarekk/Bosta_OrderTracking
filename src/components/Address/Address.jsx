import { useTranslation } from "react-i18next";
import "./Address.css";

function Address() {
  const { t } = useTranslation();
  return (
    <>
      <div className="shipment-address">
        <p>{t("Tracking.Address")}</p>
      </div>
    </>
  );
}

export default Address;
