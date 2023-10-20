// import dateFormat from "dateformat";
// import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";
// import "./DetailsTable.css";

// function DetailsTable() {
//   const { t } = useTranslation();
//   const { orderDetails } = useSelector((state) => state.shipment);
//   return (
//     <>
//       <p className="ship-status-title">{t("Tracking.ShipmentDetails")}</p>
//       <div style={{ overflow: "auto" }}>
//         <table>
//           <thead>
//             <tr>
//               <th>{t("Tracking.Branch")}</th>
//               <th>{t("Tracking.Date")}</th>
//               <th>{t("Tracking.Time")}</th>
//               <th>{t("Tracking.Details")}</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderDetails?.TransitEvents?.map((item) => {
//               if (
//                 item.state !== "NOT_YET_SHIPPED" &&
//                 item.state !== "RECEIVED_DELIVERY_LOCATION"
//               ) {
//                 return (
//                   <tr key={item.timestamp}>
//                     <td>{item?.hub ? item.hub : "Nasr City"}</td>
//                     <td>{dateFormat(item?.timestamp, "dd/mm/yyyy")}</td>
//                     <td>{dateFormat(item?.timestamp, "hh:MMTT")}</td>
//                     <td>{item.state.replace("_", " ")}</td>
//                   </tr>
//                 );
//               }
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default DetailsTable;
import dateFormat from "dateformat";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./DetailsTable.css";
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const DetailsTable = () => {
  const { t } = useTranslation();
  const { orderDetails, loading } = useSelector((state) => state.shipment);
  const noteFlag =
    orderDetails?.CurrentStatus?.state === "DELIVERED_TO_SENDER" ||
    orderDetails?.CurrentStatus?.state === "CANCELLED"
      ? true
      : false;
  const lang = useSelector((state) => state.language.lang);
  const detailsArray = orderDetails?.TransitEvents;

  const columns = [
    {
      title: t("Branch"),
      dataIndex: "branch",
    },
    {
      title: t("Date"),
      dataIndex: "date",
    },
    {
      title: t("Time"),
      dataIndex: "time",
    },
    {
      title: t("Details"),
      dataIndex: "details",
    },
  ];

  const data = detailsArray?.map((shipment) => {
    const allDate = dateFormat(shipment.timestamp, "dd/mm/yyyy hh:MMtt").split(
      " "
    );
    return {
      branch: shipment.hub ? t(`${shipment.hub}`) : t("Nasr City"),
      date: allDate[0],
      time: allDate[1],
      details: t(`${shipment.state}`),
    };
  });

  return (
    <>
      {!loading && (
        <Table
          className={
            noteFlag
              ? lang === "ar"
                ? "table-with-note-ar"
                : "table-with-note-en"
              : ""
          }
          style={{ overflow: "auto" }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      )}
    </>
  );
};
export default DetailsTable;
