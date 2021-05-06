import React from 'react';
import { Link } from 'react-router-dom';

export function Footer () {
    return (
        <footer className="footer">
            <Link to="/">
                <img className="footer__logo" src="./images/logo-dark.png" alt="Logo Kasa"/>
            </Link>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
