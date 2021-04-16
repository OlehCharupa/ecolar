import React from 'react';
import MapGoogle from '../mapGoogle/MapGoogle';
import Container from '../сontainer/Container';
import styles from './Contacts.module.css'
const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.wrapper}>
                    <nav className={styles.infoContacts}><h2>Contacts</h2></nav>
                    <div className={styles.wrapperMap}><MapGoogle /></div>

                </div>
            </Container>
        </section>
    );
};

export default Contacts;