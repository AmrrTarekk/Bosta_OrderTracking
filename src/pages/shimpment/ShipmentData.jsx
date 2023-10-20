// import help from "../../assets/help.jpg";
import { useTranslation } from "react-i18next";
import DetailsTable from "../../components/DetailsTable/DetailsTable";

function ShipmentData() {
  const { t } = useTranslation();

  return (
    <div className="row">
      <div className="col-lg-8 col-12">
        <p className="ship-status-title">{t("Tracking.ShipmentDetails")}</p>
        <DetailsTable />
      </div>
      <div className="col-lg-4 col-12">
        <p className="ship-status-title">{t("Tracking.DeliveryAddress")}</p>
        <div className="ship-status-address">
          <p>{t("Tracking.Address")}</p>
        </div>
        <div className="d-flex flex-wrap ship-status-help">
          <div>
            {/* <img style={{ width: 80 + "px" }} src={help} alt="help" /> */}
          </div>
          <div>
            <p>{t("Tracking.problem")}</p>
            <button>{t("Tracking.report")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShipmentData;
