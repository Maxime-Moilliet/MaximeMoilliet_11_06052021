import React from 'react';
import { withRouter } from 'react-router-dom';
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
                </>}
            </main>
            }
            </>
        );
    }
}

export default withRouter(PropertyDetails);