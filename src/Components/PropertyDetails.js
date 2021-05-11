import React from 'react';
import { withRouter } from 'react-router-dom';
import { Accordion } from '../Ui/Accordion';
import { ImageSlider } from '../Ui/ImageSlider';
import { Loader } from '../Ui/Loader';
import { Stars } from '../Ui/Stars';
import { getOnePropertyById } from '../Utils/api';


class PropertyDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            property: null
        }
    }

    componentDidMount () {
        let id = this.props.match.params.id;
        this.setState({loading: true});
        const property = getOnePropertyById(id);
        if(property.length <= 0) {
            this.props.history.push('/notfound');
        }
        this.setState({property: property, loading: false});
    }

    render () {
        const { loading, property} = this.state;
        let htmlContent = null;
        if(this.state.property) {
            htmlContent = { __html: property[0].host.name.split(" ").join('<br />') }
        }
    
        return (
            <>
            {loading ? <Loader />
            : <main>
                {property && <>
                    <ImageSlider pictures={property[0].pictures}/>
                    <section className="property">
                        <div className="property__content-left">
                            <h1 className="property__title">{property[0].title}</h1>
                            <p className="property__location">{property[0].location}</p>
                            <ul className="property__tags">
                                {property[0].tags.map((tag, index) => (
                                    <li className="property__tag" key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="property__content-right">
                            <Stars count={property[0].rating} />
                            <div className="property__profile">
                                <h3 className="property__profile-name" dangerouslySetInnerHTML={htmlContent}></h3>
                                <img className="property__profile-image" src={property[0].host.picture} alt={`${property[0].host.name}`}/>
                            </div>
                        </div>
                    </section>
                    <div className="accordion double">
                        <Accordion title="Description" size="small">
                            <p>{property[0].description}</p>
                        </Accordion>
                        <Accordion title="Description" size="small">
                            <ul>
                                {property[0].equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </Accordion>
                    </div>
                </>}
            </main>
            }
            </>
        );
    }
}

export default withRouter(PropertyDetails);