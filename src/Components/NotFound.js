import React from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component {
    render () {
        return (
            <main className="notFound">
                <h1 className="notFound__title">404</h1>
                <p className="notFound__description">Oups ! La page que vous demandez n'existe pas.</p>
                <Link className="notFound__link" to="/">
                    Retourner sur la page d'accueil
                </Link>
            </main>
        );
    }
}
