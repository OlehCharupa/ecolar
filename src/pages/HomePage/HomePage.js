import React from 'react';
import Container from '../../components/сontainer/Container';
import styles from './HomePage.module.css'
import ScrollableAnchor from 'react-scrollable-anchor'
const HomePage = () => {
    return (
        <Container>
            <ScrollableAnchor id={'about'} >
                <div className={styles.div}>
                    <h1>About.</h1>

                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'contacts'} >
                <div className={styles.div}>
                    <h2>Contacts</h2>

                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'form'} >
                <div className={styles.div}>

                    <h2>Form</h2>
                </div>
            </ScrollableAnchor>

        </Container>
    );
};

export default HomePage;