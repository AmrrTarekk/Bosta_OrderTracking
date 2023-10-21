import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";
import PropTypes from "prop-types";

function ProgressStatus({ color }) {
  const { t } = useTranslation();
  const { orderDetails } = useSelector((state) => state.shipment);
  const lastUpdate = dateFormat(
    orderDetails?.CurrentStatus?.timestamp,
    "dddd - dd/mm/yyyy 'at' hh:MMTT"
  );
  const lastUpdateDate =
    t(lastUpdate.split(" -")[0]) + lastUpdate.split(" -")[1];
  const delivery = dateFormat(orderDetails?.PromisedDate).split(" ");
  const deliveryDate = `${delivery[2]} ${t(delivery[1])} ${delivery[3]}`;

  return (
    <>
      <div className="status-details d-flex flex-column flex-lg-row flex-wrap justify-content-between">
        <div className="shipment-details">
          <p>
            {t("Tracking.ShipmentNo")} {orderDetails?.TrackingNumber}
          </p>
          <h6 style={{ color: color }}>
            {t(`Tracking.${orderDetails?.CurrentStatus?.state}`)}
          </h6>
        </div>
        <div className="shipment-details">
          <p>{t("Tracking.LatestUpdate")}</p>
          <h6>{lastUpdateDate}</h6>
        </div>
        <div className="shipment-details">
          <p>{t("Tracking.MerchantName")}</p>
          <h6>SOUQ.com</h6>
        </div>
        <div className="shipment-details">
          <p>{t("Tracking.DeliveryTime")}</p>
          <h6>{deliveryDate}</h6>
        </div>
      </div>
    </>
  );
}

ProgressStatus.propTypes = {
  color: PropTypes.string,
};

export default ProgressStatus;
