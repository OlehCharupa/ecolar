import React from 'react';
import './HomePage.module.css'
import ScrollableAnchor from 'react-scrollable-anchor'
import About from '../../components/about/About';
import Contacts from '../../components/contacts/Contacts';
import Services from '../../components/servicesSection/Services';
import Form from '../../components/form/Form';


const HomePage = () => {
    return (
        <>
            <ScrollableAnchor id={'about'} >
                <About />
            </ScrollableAnchor>
            <ScrollableAnchor id={'services'} >
                <Services />
            </ScrollableAnchor>
            <ScrollableAnchor id={'contacts'} >
                <Contacts />
            </ScrollableAnchor>
            <ScrollableAnchor id={'form'} >
                <Form />
            </ScrollableAnchor>

        </>
    );
};

export default HomePage;