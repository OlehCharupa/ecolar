import React from 'react';
import './HomePage.module.css'
import About from '../../components/about/About';
import Contacts from '../../components/contacts/Contacts';
import Services from '../../components/servicesSection/Services';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';


const HomePage = () => {

    return (
        <>
            <Header />
            <About />
            <Services />
            <Contacts />
            <Form />
        </>
    );
};

export default HomePage;