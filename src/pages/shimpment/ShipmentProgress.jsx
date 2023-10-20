import dateFormat from "dateformat";
import "./shipment.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ProgressBarComp from "../../components/progressBar/ProgressBarComp";

function ShipmentStatus() {
  const { t } = useTranslation();
  const { orderDetails, loading } = useSelector((state) => state.shipment);

  let color;
  let percent;
  let cancelFlag = false;
  let returnFlag = false;
  switch (orderDetails?.CurrentStatus?.state) {
    case "DELIVERED":
      color = "rgb(53,181,0)";
      percent = 100;
      break;
    case "DELIVERED_TO_SENDER":
      color = "rgb(249,186,2)";
      percent = 66;
      returnFlag = true;
      break;
    case "CANCELLED":
      color = "rgb(227, 6, 19)";
      percent = 66;
      cancelFlag = true;
      break;
  }
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
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="shipment-status-container pb-1">
            <div className="status-details d-flex flex-wrap justify-content-between">
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
            <div className="progress-steps-status">
              <ProgressBarComp percent={percent} color={color} />
              <div className="labels d-flex flex-wrap justify-content-between">
                <div className="progress-label">
                  <p>{t("Progress.TICKETCREATED")}</p>
                </div>
                <div className="progress-label">
                  <p>{t("Progress.PACKAGERECEIVED")}</p>
                </div>
                <div className="progress-label d-flex flex-column align-items-center">
                  <p className="mb-2">{t("Progress.OUTFORDELIVERY")}</p>
                  {cancelFlag && (
                    <p className="marked-label mb-0" style={{ color: color }}>
                      {t("Progress.CANCELLEDREASON")}
                    </p>
                  )}
                  {returnFlag && (
                    <p className="marked-label mb-0" style={{ color: color }}>
                      {t("Progress.RETURNREASON")}
                    </p>
                  )}
                </div>
                <div className="progress-label">
                  <p>{t("Progress.DELIVERED")}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShipmentStatus;
