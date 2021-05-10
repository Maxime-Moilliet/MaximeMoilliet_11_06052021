import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from './Icon';


export class ImageSlider extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            navigation: true
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    
    componentDidMount () {
        if(this.props.pictures.length <= 1) {
            this.setState({...this.state, navigation: false});
        }
    }
    
    nextSlide () {
        this.setState({current: this.state.current === this.props.pictures.length  - 1 ? 0 : this.state.current + 1});
    }
    
    prevSlide () {
        this.setState({current: this.state.current === 0 ? this.props.pictures.length  - 1 : this.state.current - 1});
    }
    
    render () {
        const { current, navigation } = this.state;
        const { pictures } = this.props;
        return (
            <section className="imageSlider">
                {navigation && <>
                    <ArrowLeft onHandleClick={this.prevSlide} />
                    <ArrowRight onHandleClick={this.nextSlide} /></>
                }
                {pictures && navigation && <span className="imageSlider__count">{current + 1}/{this.props.pictures.length}</span>}
                {pictures.map((picture, index) => (
                    index === current && <div className="imageSlider__slide" key={index}>
                        <img className="imageSlider__image" src={picture} alt="image du bien" />
                    </div>
                ))}
            </section>
        );
    }
}

ImageSlider.propTypes = {
    pictures: PropTypes.array.isRequired
}