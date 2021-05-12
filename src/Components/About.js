import React from 'react';
import { Accordion } from '../Ui/Accordion';
import { Banner } from '../Ui/Banner';

export class About extends React.Component {
    render () {
        return (
            <>
            <Banner image=".././images/banner-about.png" alt="bannière" >
                <h1 className="banner__title Fake">Banner à propos</h1>
            </Banner>
            <main className="accordion__group">
                <Accordion title="Fiabilité">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont 
                    régulièrements vérifiées par nos équipes.</p>
                </Accordion>
                <Accordion title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
                    comportement discriminatoire ou de pertubation du voisinage entrainera 
                    une exclusion de notre plateforme.</p>
                </Accordion>
                <Accordion title="Service">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience 
                    parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Accordion>
                <Accordion title="Sécurité">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
                    les voyageurs, chaque logement correspond aux critères de sécurité établis par 
                    nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela
                    permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                    organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Accordion>
            </main>
            </>
        );
    }
}

