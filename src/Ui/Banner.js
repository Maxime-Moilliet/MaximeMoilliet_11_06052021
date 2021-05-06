import React from 'react';
import PropTypes from 'prop-types';

export class Banner extends React.Component {
    render() {
        const { children } = this.props
        return (
            <section className="banner">
                {children}
            </section>
        );
    }
}

Banner.propTypes = {
    children: PropTypes.node,
}
