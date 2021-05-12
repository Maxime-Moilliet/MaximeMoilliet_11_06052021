import React from 'react';
import PropTypes from 'prop-types';

export class Banner extends React.Component {
    render() {
        const { children, image, alt } = this.props
        return (
            <section className="banner">
                <img className="banner__img" src={image} alt={alt} />
                {children}
            </section>
        );
    }
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
}
