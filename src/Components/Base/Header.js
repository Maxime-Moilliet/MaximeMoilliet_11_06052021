import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <Link to="/">
                    <img src="./images/logo.png" className="header__img" alt="Logo Kasa"/>
                </Link>
                <nav className="header__nav">
                    <NavLink exact activeClassName="active" className="header__link" to="/">
                        Accueil
                    </NavLink>
                    <NavLink exact activeClassName="active" className="header__link" to="/about">
                        A propos
                    </NavLink>
                </nav>
            </header>
        );
    }
} 