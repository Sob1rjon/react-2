import React from "react"
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo.png'
import '../../components/Header/Header.css';
function Header() {
    return (
        <div className="header">
            <div className="header__line-1">
            </div>
            <div className="container">
                <div className="header__inner">
                    <div className="header__inner-left">
                        <img className="logo" src={Logo} alt="" />
                    </div>
                    <div className="header__inner-right">
                        <ul>
                            <li>
                                <Link to='/'>Kontaktformular</Link>
                            </li>
                        </ul>
                        <div className="header__line-2">
                        </div>
                        <div className="header__line-3">
                        </div>
                    </div>
                    <div className="header__inner-links">
                        <ul>
                            <li>
                                <Link to='/'>Startseite</Link>
                            </li>
                            <li>
                                <Link to='/'>SDienstleistungen</Link>
                            </li>
                            <li>
                                <Link to='/'>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header