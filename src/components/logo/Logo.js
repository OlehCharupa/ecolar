import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css'
import logoSvgFull from './images/ecolar_logo_full.svg'
// import logoSvgSign from './images/ecolar_logo_sign.svg'
// import { useWindowWidth } from "@react-hook/window-size";


const Logo = () => {
    // const onlyWidth = useWindowWidth();

    return (
        <NavLink to='/' className={styles.test}>
            <img alt='logo' src={logoSvgFull} className={styles.logo} />
        </NavLink>
    );
};

export default Logo;