import React, { useState } from 'react';
import styles from './Navigation.module.css'
// import { NavLink } from 'react-router-dom'
import { useWindowWidth } from "@react-hook/window-size";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";

import iconAbout from "./images/iconAbout.svg";
import iconContacts from "./images/iconContacts.svg";
import iconSearch from "./images/iconSearch.svg";
import iconTel from "./images/iconTel.svg";
import iconUa from "./images/iconUa.svg";
import iconLogin from "./images/login.svg"
import Logo from '../logo/Logo';
import Modal from '../modal/Modal';
import PlugLogin from '../plugLogin/PlugLogin';

const Navigation = ({ onModalClose = null }) => {

    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    const onlyWidth = useWindowWidth();

    return (
        <>
            {onlyWidth < 1199 && <div className={styles.wrapperLogo}><Logo /></div>}
            <nav className={styles.navigation}>
                <a
                    href="tel:+380666013002"
                    className={styles.link}
                    onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                    <img src={iconTel} className={styles.iconTel} alt="iconTel" />
                Подзвонити
                </a>
                <Link
                    to='about'
                    activeClass={styles.active}
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    // offset={-30}
                    duration={800}
                    onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                    <img src={iconAbout} className={styles.iconTel} alt="iconAbout" />
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
                    <img src={iconSearch} className={styles.iconTel} alt="iconSearch" />
                Послуги
                </Link>
                <Link
                    to='footer'
                    activeClass={styles.active}
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    // offset={-30}
                    duration={800}
                    onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                    <img src={iconContacts} className={styles.iconTel} alt="iconContacts" />
                Контакти
                </Link>
                <a href="/"
                    className={styles.link}
                    onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                    <img src={iconUa} className={styles.iconTel} alt="iconContacts" />
                UA
                </a>
                <span href="/"
                    className={styles.link}
                    onClick={() => { toggleModal() && onlyWidth < 1199 && onModalClose && onModalClose() }}
                >
                    <img src={iconLogin} className={styles.iconLogin} alt="iconLogin" />
                </span>
                <Modal
                    arrowVisible
                    toggleModal={toggleModal}
                    openModal={openModal}
                >
                    <PlugLogin toggleModal={toggleModal} />
                </Modal>


                {/* <NavLink
                key='login'
                to='/login'
                className={styles.link}
                onClick={() => { onlyWidth < 1199 && onModalClose && onModalClose() }}>
                Вхід
                </NavLink> */}
            </nav>
        </>
    );
};

export default Navigation;