import React from 'react';
import PropTypes from 'prop-types';

export class ArrowTop extends React.Component {
    render () {
        return (
            <svg className="accordion__arrowTop" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
            </svg>
        );
    }
}

export class ArrowBottom extends React.Component {
    render () {
        return (
            <svg className="accordion__arrowBottom" width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white"/>
            </svg>
        );
    }
}

export class ArrowLeft extends React.Component {
    render () {
        const {onHandleClick} = this.props
        return (
            <svg onClick={onHandleClick} className="imageSlider__arrowLeft" width="48" height="80" viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
        );
    }
}

ArrowLeft.propTypes = {
    onHandleClick: PropTypes.func.isRequired
}

export class ArrowRight extends React.Component {
    render () {
        const {onHandleClick} = this.props;
        return (
            <svg onClick={onHandleClick} className="imageSlider__arrowRight" width="48" height="80" viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
        );
    }
}

ArrowRight.propTypes = {
    onHandleClick: PropTypes.func.isRequired
}

export class Star extends React.Component {
    render () {
        const { active } = this.props;
        return (
            <svg className="property__star" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={active ? "#FF6060" : "#E3E3E3"}/>
            </svg>
        );
    }
}

Star.propTypes = {
    active: PropTypes.bool,
}