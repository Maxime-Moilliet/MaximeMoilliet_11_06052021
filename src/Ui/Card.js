import React from 'react';
import PropTypes from 'prop-types';

export class Card extends React.Component {

    render() {
        const { img, title } = this.props;
        return (
            <article className="propertyCard" style={{backgroundImage:`url(${img})`}}>
                <h2 className="propertyCard__title">{title}</h2>
            </article>
        );
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}