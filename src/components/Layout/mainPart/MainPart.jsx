import React from "react";
import { useTranslation } from "react-i18next";
import an1 from "../../image/mainPart/an1.png";
import an4 from "../../image/mainPart/an4.png";
import an6 from "../../image/mainPart/an6.png";
import an5 from "../../image/mainPart/an5.png";
import an3 from "../../image/mainPart/an3.png";
import an2 from "../../image/mainPart/an2.png";
import an11 from "../../image/mainPart/an11.png";
import an8 from "../../image/mainPart/an8.png";
import an7 from "../../image/mainPart/an7.png";
import an10 from "../../image/mainPart/an10.png";
import an13 from "../../image/mainPart/an13.png";

import an9 from "../../image/mainPart/an9.png";

const MainPart = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="mainPart">
      <div className="mainPart">
        <div className="an1">
          <img src={an1} alt="" />
        </div>
        <div className="an4">
          <img src={an4} alt="" />
        </div>
        <div className="an6">
          <img src={an6} alt="" />
        </div>
       <div className="an7">
          <img src={an7} alt="" />
        </div>
        <div className="an5">
          <img src={an5} alt="" />
        </div>
        <div className="an3">
          <img src={an3} alt="" />
        </div>
         <div className="an2">
          <img src={an2} alt="" />
        </div>
       <div className="an11">
          <img src={an11} alt="" />
        </div>
         <div className="an12">
          <img src={an13} alt="" />
        </div>
         <div className="an8">
          <img src={an8} alt="" />
        </div>
       <div className="an10">
          <img src={an10} alt="" />
        </div>
         <div className="an9">
          <img src={an9} alt="" />
        </div>
          <div className="backdropBlur"></div>
        
      </div>
    </div>
  );
};

export default MainPart;
