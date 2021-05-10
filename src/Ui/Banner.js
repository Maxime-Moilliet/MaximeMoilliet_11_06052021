import React from 'react';
import PropTypes from 'prop-types';

export class Banner extends React.Component {
    render() {
        const { children, image } = this.props
        return (
            <section className="banner" style={{backgroundImage: `"url("${image}")"`}}>
                {children}
            </section>
        );
    }
}

Banner.propTypes = {
    children: PropTypes.node,
    image: PropTypes.string.isRequired,
}
