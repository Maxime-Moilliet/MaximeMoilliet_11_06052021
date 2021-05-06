import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Card extends React.Component {

    render() {
        const { img, title, id } = this.props;
        return (
            <Link to={`/property/${id}`} >
                <article className="propertyCard" style={{backgroundImage:`url(${img})`}}>
                    <h2 className="propertyCard__title">{title}</h2>
                </article>
            </Link>
        );
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}