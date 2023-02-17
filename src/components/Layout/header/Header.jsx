import { useTranslation } from "react-i18next";
import React, {useState} from "react";
import LOGO from "../../image/header/logo.png";
import language from "../../image/header/language.svg";
import { NavLink } from "react-router-dom";
import Courses from "./Courses";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [courses,setCourses] = useState(false)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <header
        onMouseOver={()=> setCourses(true)}
        onMouseLeave={() => setCourses(false)}
        id="header">
      <div className="container">
          {/*{*/}
          {/*    courses? :""*/}
          {/*}*/}
          {courses ?  <Courses/> : ''}

          <div className="header">
          <div className="header--logo">
            <img src={LOGO} alt="" />
          </div>
          <nav className="header--navbar">
            <NavLink to={"/"}  className='header--navbar--link'>{t('text')}</NavLink>
            <NavLink to={"aboutUs"} className='header--navbar--link'>О нас</NavLink>
            <span className="header--navber--courses"> О курсах</span>
            <NavLink to={"club"} className='header--navbar--link'>Клуб</NavLink>
            <NavLink className='header--navbar--link'>Контакты</NavLink>
          </nav>
          <div className="header--language">
            <img src={language} alt="" />
            <div>
              <span onClick={()=> changeLanguage('kg')}>КР</span > /  
              <span onClick={()=> changeLanguage('ru')}>РУС</span>  / 
              <span onClick={()=> changeLanguage('en')}> ENG </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
