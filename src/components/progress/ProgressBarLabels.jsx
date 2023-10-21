import { CheckCircleFilled } from "@ant-design/icons";
import {
  faFileCircleCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function ProgressBarLabels({ color, cancelFlag, returnFlag, percent }) {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  return (
    <>
      <div className="labels d-flex flex-column flex-lg-row  flex-wrap justify-content-between">
        <div className="progress-label">
          <p>{t("Progress.TICKETCREATED")}</p>
          <CheckCircleFilled
            className="check-icon d-lg-none"
            style={{
              color: color,
            }}
          />
        </div>
        <div className="progress-label">
          <p>{t("Progress.PACKAGERECEIVED")}</p>
          <CheckCircleFilled
            className="check-icon d-lg-none"
            style={{
              color: color,
            }}
          />
        </div>
        <div className="progress-label d-flex flex-column align-items-start align-items-lg-center">
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
          {percent >= 67 ? (
            <CheckCircleFilled
              className="check-icon d-lg-none"
              style={{
                color: color,
              }}
            />
          ) : (
            <div
              className={`icon-div mt-2 d-lg-none ${
                percent >= 65 ? "accomplished-icon" : ""
              }`}
              style={{
                backgroundColor: `${percent >= 65 ? color : ""}`,
              }}
            >
              <FontAwesomeIcon
                className="truck-icon"
                style={{
                  color: `${
                    percent >= 65 ? "white" : "rgba(211, 211, 211, 0.957)"
                  }`,
                  transform: lang === "ar" ? "rotateY(180deg)" : "",
                }}
                icon={faTruckFast}
              />
            </div>
          )}
        </div>
        <div className="progress-label">
          <p>{t("Progress.DELIVERED")}</p>
          {percent === 100 ? (
            <CheckCircleFilled
              className="check-icon d-lg-none"
              style={{
                color: color,
              }}
            />
          ) : (
            <div className="icon-div d-lg-none">
              <FontAwesomeIcon
                className="delivered-icon"
                style={{
                  color: "rgba(211, 211, 211, 0.957)",
                }}
                icon={faFileCircleCheck}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

ProgressBarLabels.propTypes = {
  percent: PropTypes.number,
  color: PropTypes.string,
  returnFlag: PropTypes.bool,
  cancelFlag: PropTypes.bool,
};

export default ProgressBarLabels;
