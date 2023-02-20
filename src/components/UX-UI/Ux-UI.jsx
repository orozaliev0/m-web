
import React, {useState} from "react";

import FirstImg from "../image/frontEnd/first.png"
import secondImg from "../image/frontEnd/second.png"
import thirdImg from "../image/frontEnd/third.png"
import Certificate from "../image/frontEnd/certificate.png"
import Card from "../image/frontEnd/designer.png"

import mentorRight from "../image/frontEnd/mentorRight.png"
import mentorCenter from "../image/frontEnd/mentorCenter.png"
import mentorLeft from "../image/frontEnd/mentorLeft.png"
import { useTranslation } from "react-i18next";



const UxUi = () => {
    const {t, i18n} = useTranslation();
    // const [button, setButton] = useState(false)

    return(
        <div id="frontEnd">

            <div className="frontEnd">
                <div className="container">
                    <div className="frontEnd--inform">
                        <div className="frontEnd--inform__question">

                            <h3>{t("frontend.question")} <span>{t("frontend.text")}
                                <br/> {t("frontend.text-")}</span> {t("frontend.text?")}</h3>


                        </div>
                        <div className="frontEnd--inform__text">
                            <p>{t("frontend.inform")}</p>
                            <p>{t("frontend.inform-")}</p>
                            <h4>{t("frontend.left")}</h4>
                            <h4>{t("frontend.left-")}</h4>
                            <h4>{t("frontend.left--")}</h4>
                            <h4>{t("frontend.left---")}</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="frontEnd--courses">
                        <h2>{t("frontend.courses")} <br/> {t("frontend.courses-")}</h2>

                        <div className="frontEnd--courses__inform">
                            <div className="frontEnd--courses__inform--first">
                                <div className="frontEnd--courses__inform--first__fon">
                                    <img src={FirstImg} alt=""/>
                                </div>
                                <h3>{t("frontend.new")}</h3>
                                <p>{t("frontend.newInform")} <br/> {t("frontend.newInform-")}
                                    <br/> {t("frontend.newInform--")}</p>

                            </div>
                            <div className="frontEnd--courses__inform--first">
                                <div className="frontEnd--courses__inform--first__fon">
                                    <img src={secondImg} alt=""/>
                                </div>
                                <h3>{t("frontend.junior")}</h3>
                                <p>{t("frontend.juniorInform")} <br/> {t("frontend.juniorInform-")}
                                    <br/> {t("frontend.juniorInform--")}</p>

                            </div>
                            <div className="frontEnd--courses__inform--first">
                                <div className="frontEnd--courses__inform--first__fon">
                                    <img src={thirdImg} alt=""/>
                                </div>
                                <h3>{t("frontend.designer")}</h3>
                                <p>{t("frontend.designerInform")} <br/> {t("frontend.designerInform-")}
                                    <br/> {t("frontend.designerInform--")} <br/> {t("frontend.designerInform---")}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="frontEnd--title">
                        <div className="frontEnd--title__first">
                            <h1>{t("frontend.educationHour")} <br/> <span>{t("frontend.education")}</span></h1>
                        </div>
                        <div className="frontEnd--title__first">
                            <h1>{t("frontend.time")} <br/> <span>{t("frontend.timeHour")}</span></h1>
                        </div>
                        <div className="frontEnd--title__first">
                            <h1>{t("frontend.timeEnglish")} <br/> <span>{t("frontend.englishHour")}</span></h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="frontEnd--buttons">
                        <button>{t("frontend.offline")}</button>
                        <button>{t("frontend.online")}</button>
                    </div>
                </div>

            </div>

            <div className="frontEnd--bottom">
                <div className="container">
                    <div className="frontEnd--cours">
                        <div className="frontEnd--cours__text">
                            <h2>{t("frontend.coursText")} <br/> {t("frontend.coursText-")}</h2>
                        </div>
                        <div className="frontEnd--cours__informs">
                            <div className="frontEnd--cours__informs--first">
                                <div className="frontEnd--cours__informs--first__title">
                                    <h3>{t("frontend.first")}</h3>
                                    <h3>{t("frontend.employment")}</h3>
                                    <p>{t("frontend.employmentInform")} <br/> {t("frontend.employmentInform-")}</p>
                                </div>
                                <hr/>
                            </div>
                            <div className="frontEnd--cours__informs--first">
                                <div className="frontEnd--cours__informs--first__title">
                                    <h3>{t("frontend.second")}</h3>
                                    <h3>{t("frontend.english")}</h3>
                                    <p>{t("frontend.secondText")} <br/> {t("frontend.secondText-")}
                                        <br/> {t("frontend.secondText--")}</p>
                                </div>
                                <hr/>
                            </div>

                            <div className="frontEnd--cours__informs--first">
                                <div className="frontEnd--cours__informs--first__title">
                                    <h3>{t("frontend.third")}</h3>
                                    <h3>{t("frontend.portfolio")}</h3>
                                    <p>{t("frontend.threeText")} <br/> {t("frontend.threeText-")}</p>
                                </div>
                                <hr/>
                            </div>

                            <div className="frontEnd--cours__informs--first">
                                <div className="frontEnd--cours__informs--first__title">
                                    <h3>{t("frontend.fought")}</h3>
                                    <h3>{t("frontend.support")}</h3>
                                    <p>{t("frontend.supportText")} <br/> {t("frontend.supportText-")}</p>
                                </div>
                                <hr/>
                            </div>
                            <div className="frontEnd--cours__informs--first">
                                <div className="frontEnd--cours__informs--first__title">
                                    <h3>{t("frontend.fifth")}</h3>
                                    <h3>{t("frontend.work")} <br/> {t("frontend.work-")}</h3>
                                    <p>{t("frontend.workText")} <br/> {t("frontend.workText-")}
                                        <br/> {t("frontend.workText--")}</p>
                                </div>
                                <hr/>
                            </div>
                            <div className="frontEnd--cours__informs--first">
                                <div className="frontEnd--cours__informs--first__title">
                                    <h3>{t("frontend.sixth")}</h3>
                                    <h3>{t("frontend.train  ")}</h3>
                                    <p>{t("frontend.trainText")} <br/> {t("frontend.trainText-")}
                                        <br/> {t("frontend.trainText--")}</p>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="frontEnd--certificate">
                <div className="container">
                    <div className="frontEnd--certificate__inform">
                        <div className="frontEnd--certificate__inform--text">
                            <h3>{t("frontend.certificate")}</h3>
                            <h6>{t("frontend.certificateText")} <br/> {t("frontend.certificateText-")}
                                <br/> {t("frontend.certificateText--")} <br/> {t("frontend.certificateText---")}</h6>
                            <div className="frontEnd--certificate__inform--text__buttons">
                                <button>Кыргызский</button>
                                <button>Русский</button>
                                <button>Английский</button>
                            </div>
                            <h6>{t("frontend.company")} <br/> {t("frontend.company-")} <br/> {t("frontend.company--")}
                            </h6>
                        </div>
                        <div>
                            <img src={Certificate} alt=""/>
                        </div>

                    </div>

                </div>

            </div>

            <div className="designer">
                <div className="container">
                    <div className="designer--choose">
                        <h2>{t("frontend.designerChoose")}</h2> <br/>
                        <p>{t("frontend.free")}</p>
                    </div>
                    <div className="designer--fon">
                        <img src= {Card} alt=""/>
                        <div className="designer--fon__application">
                            <form>
                                <input type="text" placeholder="Имя"/>
                            </form>
                            <form>
                                <input type="text" placeholder="Номер"/>
                            </form>
                            <div className="designer--fon__application--checked">
                                <input type="checkbox"/>
                                <p>{t("frontend.agree")}</p>

                            </div>
                            <button>{t("frontend.button")}</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className="mentor">
                <div className="container">
                    <div className="mentor--title">
                          <h2>{t("frontend.mentor")}</h2> <br/>
                        <h3>{t("frontend.mentorKg")}</h3>
                    </div>
                    <div className="mentor--boys">
                        <div className="mentor--boys__first">
                            <img src={mentorRight} alt=""/>
                            <h3>{t("frontend.nameRight")}</h3>
                            <p>{t("frontend.rightInform")} <br/> {t("frontend.rightInform-")} <br/> {t("frontend.rightInform--")}</p>
                        </div>
                        <div className="mentor--boys__first">
                            <img src={mentorCenter} alt=""/>
                            <h3>{t("frontend.nameCenter")}</h3>
                            <p>{t("frontend.rightInform")} <br/> {t("frontend.rightInform-")} <br/> {t("frontend.rightInform--")}</p>
                        </div>
                        <div className="mentor--boys__first">
                            <img src={mentorLeft} alt=""/>
                            <h3>{t("frontend.nameLeft")}</h3>
                            <p>{t("frontend.rightInform")} <br/> {t("frontend.rightInform-")} <br/> {t("frontend.rightInform--")}</p>
                        </div>

                    </div>
                    <div className="mentor--connection">
                        <div className="mentor--connection__text">
                            <h2>{t("frontend.mentorText")} <br/> {t("frontend.mentorText-")} <br/> {t("frontend.mentorText--")}</h2>
                            <p>{t("frontend.texts")} <br/> {t("frontend.texts-")} <br/> {t("frontend.texts--")}</p>
                        </div>
                        <div className="mentor--connection__video">
                            <iframe  width="380" height="215" style={{
                                borderRadius: "30px",
                                marginTop: "15px",
                                margin: "0 30px"
                            }}  src="https://www.youtube.com/embed/7VerRJwJP0s"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                            <iframe width="380" height="215" style={{
                                borderRadius: "30px",
                                marginTop: "15px"
                            }} src="https://www.youtube.com/embed/H0ZTsv4ljcE"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                            </iframe>
                        </div>

                    </div>
                </div>

            </div>

            <div className="program">
                <div className="container">
                    <div className="program--courses">
                        <h1>{t("frontend.program")}</h1>
                        <p>{t("frontend.programText")} <br/> {t("frontend.programText-")} <br/> {t("frontend.programText--")} <br/> {t("frontend.programText---")}</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default UxUi