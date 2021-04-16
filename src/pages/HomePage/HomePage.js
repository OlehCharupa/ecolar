import React from 'react';
import styles from './HomePage.module.css'
import ScrollableAnchor from 'react-scrollable-anchor'
import About from '../../components/about/About';
import Contacts from '../../components/contacts/Contacts';


const HomePage = () => {
    return (
        <>
            <ScrollableAnchor id={'about'} >
                <About />
            </ScrollableAnchor>
            <ScrollableAnchor id={'contacts'} >
                <Contacts />
            </ScrollableAnchor>
            <ScrollableAnchor id={'form'} >
                <div className={styles.div}>
                    <h2>Form</h2>
                </div>
            </ScrollableAnchor>

        </>
    );
};

export default HomePage;