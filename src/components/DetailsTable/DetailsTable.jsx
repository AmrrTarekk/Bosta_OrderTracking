import dateFormat from "dateformat";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./DetailsTable.css";

const DetailsTable = () => {
  const { t } = useTranslation();
  const { orderDetails, loading } = useSelector((state) => state.shipment);
  const noteFlagRed =
    orderDetails?.CurrentStatus?.state === "CANCELLED" ? true : false;
  const noteFlagYellow =
    orderDetails?.CurrentStatus?.state === "DELIVERED_TO_SENDER" ? true : false;
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
      // render: (text) => {
      //   if (text === "Returned") {
      //     return ;
      //   }
      //   return text;
      // },
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
            noteFlagRed
              ? lang === "ar"
                ? "table-with-note-ar-red"
                : "table-with-note-en-red"
              : noteFlagYellow
              ? lang === "ar"
                ? "table-with-note-ar-yellow"
                : "table-with-note-en-yellow"
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
