import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import PropTypes from "prop-types";
import "./ProgressBar.css";
import { CheckCircleFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

function ProgressBarComp({ percent, color }) {
  const lang = localStorage.getItem("lang");
  return (
    <div className={`prog ${lang === "ar" ? "prog-ar" : ""}`}>
      <ProgressBar percent={percent} filledBackground={`${color}`}>
        <Step className="position-relative" transition="scale">
          {({ accomplished }) => (
            <CheckCircleFilled
              className="check-icon"
              style={{
                filter: `grayscale(${accomplished ? 0 : 80}%)`,
                color: color,
                transform: lang === "ar" ? "rotateY(180deg)" : "",
              }}
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <CheckCircleFilled
              className="check-icon"
              style={{
                filter: `grayscale(${accomplished ? 0 : 80}%)`,
                color: color,
                transform: lang === "ar" ? "rotateY(180deg)" : "",
              }}
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <>
              {accomplished ? (
                <CheckCircleFilled
                  className="check-icon"
                  style={{
                    filter: `grayscale(${accomplished ? 0 : 80}%)`,
                    color: color,
                    transform: lang === "ar" ? "rotateY(180deg)" : "",
                  }}
                />
              ) : (
                <div
                  className={`icon-div ${
                    percent >= 65 ? "accomplished-icon" : ""
                  }`}
                  style={{ backgroundColor: `${percent >= 65 ? color : ""}` }}
                >
                  <FontAwesomeIcon
                    className="truck-icon"
                    style={{
                      color: `${
                        percent >= 65 ? "white" : "rgba(211, 211, 211, 0.957)"
                      }`,
                      transform: lang === "ar" ? "" : "rotateY(180deg)",
                    }}
                    icon={faTruckFast}
                  />
                </div>
              )}
            </>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <>
              {accomplished ? (
                <CheckCircleFilled
                  className="check-icon"
                  style={{
                    filter: `grayscale(${accomplished ? 0 : 80}%)`,
                    color: color,
                    transform: lang === "ar" ? "rotateY(180deg)" : "",
                  }}
                />
              ) : (
                <div className="icon-div">
                  <FontAwesomeIcon
                    className="delivered-icon"
                    style={{
                      color: "rgba(211, 211, 211, 0.957)",
                      transform: lang === "ar" ? "rotateY(180deg)" : "",
                    }}
                    icon={faFileCircleCheck}
                  />
                </div>
              )}
            </>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}

ProgressBarComp.propTypes = {
  percent: PropTypes.number,
  color: PropTypes.string,
};

export default ProgressBarComp;
