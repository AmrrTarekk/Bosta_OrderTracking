import "./shipment.css";
import { useSelector } from "react-redux";
import ProgressBarComp from "../../components/progress/ProgressBarComp";
import ProgressBarLabels from "../../components/progress/ProgressBarLabels";
import ProgressStatus from "../../components/progress/ProgressStatus";

function ShipmentStatus() {
  const { orderDetails, loading } = useSelector((state) => state.shipment);
  let color;
  let percent = 0;
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

  return (
    <>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="shipment-status-container pb-1">
            <ProgressStatus color={color} />
            <div className="progress-steps-status">
              <ProgressBarComp percent={percent} color={color} />
              <ProgressBarLabels
                color={color}
                cancelFlag={cancelFlag}
                returnFlag={returnFlag}
                percent={percent}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShipmentStatus;
