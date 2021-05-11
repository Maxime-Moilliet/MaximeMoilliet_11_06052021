import React from 'react';
import { Star } from './Icon';
import PropTypes from 'prop-types';

export class Stars extends React.Component {
    render () { 
        const {count} = this.props;
        const nbStars = parseInt(count, 10);
        const content = [];

        for(let i = 1; i <= 5; i++) {
            i <= nbStars ? content.push(<Star key={i} active/>) : content.push(<Star key={i} />)
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

Stars.protoTypes = {
    count: PropTypes.string.isRequired
}