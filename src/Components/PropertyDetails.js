import React from 'react';
import { withRouter } from 'react-router-dom';
import { Accordion } from '../Ui/Accordion';
import { ImageSlider } from '../Ui/ImageSlider';
import { Loader } from '../Ui/Loader';
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
            this.props.history.push('/');
        }
        this.setState({property: property, loading: false});
    }

    render () {
        const { loading, property} = this.state;
        return (
            <>
            {loading ? <Loader />
            : <main>
                {property && <>
                    <ImageSlider pictures={property[0].pictures}/>
                    <section className="property__content">
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

                        </div>
                    </section>
                    <section className="accordion double">
                        <Accordion title="Description" isOpen="true" size="small">
                            <p>{property[0].description}</p>
                        </Accordion>
                        <Accordion title="Description" isOpen="true" size="small">
                            <ul>
                                {property[0].equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </Accordion>
                    </section>
                </>}
            </main>
            }
            </>
        );
    }
}

export default withRouter(PropertyDetails);