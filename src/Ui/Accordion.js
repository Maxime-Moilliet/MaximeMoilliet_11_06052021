import React from 'react';
import PropTypes from 'prop-types';
import { ArrowTop, ArrowBottom } from './Icon';

export class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.isOpen ? this.props.isOpen : false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick () {
        this.setState({open: !this.state.open});
    }
    
    render() {
        const { title, children, size } = this.props;
        let name = "";
        if(size === 'small') {
            name = "small";
        }
        const { open } = this.state;
        return (
            <section className={`accordion ${name}`}>
                <div className="accordion__header"  onClick={this.handleClick}>
                    <h3 className="accordion__title">{title}</h3>
                    {open ? <ArrowBottom /> : <ArrowTop />}
                </div>
                { open && <div className="accordion__body">
                    {children}
                </div>}
            </section>
        );
    }
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.string,
    size: PropTypes.string,
}