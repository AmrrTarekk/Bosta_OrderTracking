import { useTranslation } from "react-i18next";
import SearchInput from "../SearchInput/SearchInput";

function InputComp() {
  const { t } = useTranslation();
  return (
    <div className={`${t("class")} p-1 px-2`}>
      <h5 className="my-3">{t("Track.Tracking")}</h5>
      <SearchInput className="mb-2 pb-1" />
    </div>
  );
}

export default InputComp;
