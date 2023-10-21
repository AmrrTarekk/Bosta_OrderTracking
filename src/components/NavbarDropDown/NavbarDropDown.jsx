import "./NavbarDropDown.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputComp from "./InputComp";

const NavbarDropDown = () => {
  const { t } = useTranslation();
  const items = [
    {
      label: (
        <div className="inp">
          <InputComp />
        </div>
      ),
      key: 1,
      type: "group",
    },
  ];

  const { lang } = useSelector((state) => state.language);
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Link className="dropdownCustom text-decoration-none">
        <div className="drop d-flex flex-row align-items-center gap-1 ">
          {t("TrackingShipment")}
          {lang === "en" && <RightOutlined />}
          {lang === "ar" && <LeftOutlined />}
        </div>
      </Link>
    </Dropdown>
  );
};
export default NavbarDropDown;
