import React from 'react';
import styles from './Navigation.module.css'
// import { NavLink } from 'react-router-dom'
import { useWindowWidth } from "@react-hook/window-size";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = ({ onModalClose = null }) => {

    const onlyWidth = useWindowWidth();

    return (
        <nav className={styles.navigation}>
            <Link
                to='about'
                activeClass={styles.active}
                className={styles.link}
                spy={true}
                smooth={true}
                // offset={-30}
                duration={800}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Про нас
                </Link>
            <Link
                to='services'
                activeClass={styles.active}
                className={styles.link}
                spy={true}
                smooth={true}
                // offset={-30}
                duration={800}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Послуги
                </Link>
            <Link
                to='contacts'
                activeClass={styles.active}
                className={styles.link}
                spy={true}
                smooth={true}
                // offset={-30}
                duration={800}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Контакти
                </Link>
            <Link
                to='form'
                activeClass={styles.active}
                className={styles.link}
                spy={true}
                smooth={true}
                // offset={-30}
                duration={800}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Зворотній зв`язок
                </Link>
            {/* <NavLink
                key='login'
                to='/login'
                className={styles.link}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Вхід
                </NavLink> */}
        </nav>
    );
};

export default Navigation;