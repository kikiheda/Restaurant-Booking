import React from "react";
import "./Header.scss";

const Header = () => {

    return (
        <div className="header">
            <img className="header__logo"/>
            <div className="header__nav">
                <nav className="header__nav-bar">
                    <ul>
                        <li>
                            HOME
                        </li>
                        <li>
                            MENU
                        </li>
                        <li>
                            CONTACT US
                        </li>
                    </ul>

                </nav>
            </div>

        </div>

    )
}

export default Header;