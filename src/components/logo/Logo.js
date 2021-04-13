import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <NavLink to='/' className={styles.test}>
            <span className={styles.text}>Logo</span>
        </NavLink>
    );
};

export default Logo;