import { useDispatch } from "react-redux";
import ShipmentData from "./ShipmentData";
import ShipmentStatus from "./ShipmentProgress";
import { useEffect } from "react";
import { handleFetchData } from "../../redux/slices/shipmentSlice";
import { useParams } from "react-router-dom";

function ShipmentDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchData(id.slice(1)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="shipment mt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ShipmentStatus />
          </div>
          <div className="col-12 my-4">
            <ShipmentData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentDetails;
