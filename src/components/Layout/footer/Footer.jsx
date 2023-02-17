import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t, i18n} = useTranslation()
    return(
        <div className="footer-content">
          {t("frontend.title")}
        </div>
    )
}

export default Footer