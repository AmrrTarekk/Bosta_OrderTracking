import Search from "antd/es/input/Search";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchInput.css";

function SearchInput({ className }) {
  const { t } = useTranslation();
  const [id, setId] = useState();
  const navigate = useNavigate();

  const onSearch = () => {
    if (id) {
      navigate(`/order-tracking/:${id}`);
    }
    setId("");
  };
  return (
    <Search
      value={id}
      className={className}
      placeholder={t("HomePage.placeholder")}
      onChange={(e) => setId(e.target.value)}
      onSearch={onSearch}
      enterButton
    />
  );
}

SearchInput.propTypes = {
  className: PropTypes.string,
};

export default SearchInput;
