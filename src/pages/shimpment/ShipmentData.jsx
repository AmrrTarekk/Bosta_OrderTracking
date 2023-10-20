// import help from "../../assets/help.jpg";
import { useTranslation } from "react-i18next";
import DetailsTable from "../../components/DetailsTable/DetailsTable";
import { useSelector } from "react-redux";
import Address from "../../components/Address/Address";
import HelpSec from "../../components/HelpSec/HelpSec";

function ShipmentData() {
  const { t } = useTranslation();
  const { loading } = useSelector((state) => state.shipment);

  return (
    <>
      {!loading && (
        <div className="row">
          <div className="col-lg-8 col-12">
            <p className="details-title">{t("Tracking.ShipmentDetails")}</p>
            <DetailsTable />
          </div>
          <div className="col-lg-4 col-12">
            <p className="details-title">{t("Tracking.DeliveryAddress")}</p>
            <Address />
            <HelpSec />
          </div>
        </div>
      )}
    </>
  );
}
export default ShipmentData;
