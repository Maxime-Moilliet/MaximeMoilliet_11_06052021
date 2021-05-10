import React from 'react';

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
