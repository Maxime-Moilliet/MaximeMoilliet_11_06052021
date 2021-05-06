import React from 'react'
import { Banner } from '../Ui/Banner';
import { Card } from '../Ui/Card';
import { Loader } from '../Ui/Loader';
import { getAllProperties } from '../Utils/api';

export class Home extends React.Component {

    constructor(props) {
        super (props)
        this.state = {
            loading: false,
            properties: []
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        const allProperties = getAllProperties()
        this.setState({...this.state, properties: allProperties, loading: false})
    }
    
    render () {
        const {loading, properties} = this.state
        return (
            <>
            <Banner>
                <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
            </Banner>
            {loading ? <Loader /> 
            : <main className="gallery">
                {properties.map(property => (
                    <Card key={property.id} img={property.cover} title={property.title} id={property.id} />
                ))}
            </main>}
            </>
            
        );
    }
}

