import React from 'react';
import PropTypes from 'prop-types';

export class Banner extends React.Component {
    render() {
        const { children, image } = this.props
        return (
            <section className={image === "home" ? "banner" : "banner about"}>
                {children}
            </section>
        );
    }
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
}
