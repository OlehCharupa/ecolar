import React from 'react';
import Container from '../сontainer/Container';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <p className={styles.text}>Made With Love By CS Tehnology All Right Reserved </p>
            </Container>
        </footer>
    );
};

export default Footer;