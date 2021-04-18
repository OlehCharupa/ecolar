import React from 'react';
import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { useWindowWidth } from "@react-hook/window-size";

const Navigation = ({ onModalClose = null }) => {

    const onlyWidth = useWindowWidth();

    return (
        <nav className={styles.navigation}>
            <a
                href='/#about'
                className={styles.link}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Про нас
                </a>
            <a
                href='/#contacts'
                className={styles.link}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Контакти
                </a>
            <a
                href='/#form'
                className={styles.link}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Зворотній звязок
                </a>
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