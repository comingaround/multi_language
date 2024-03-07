import { useTranslation } from "react-i18next";

function Second() {
    const { t, i18n } = useTranslation();
    return(
        <h1>
            {t("summer was cold")}
        </h1>
    );
}
export default Second;