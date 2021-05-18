import React, { useState } from 'react';
import Logo from '../logo/Logo';
import styles from './Header.module.css'
import { useWindowWidth } from "@react-hook/window-size";
import burger from "./images/burger.svg";
import close from "./images/close.svg";
import bcLogoMin from "./images/bcLogoMin.svg"
import MenuModal from '../menuModal/MenuModal';
import Navigation from '../navigation/Navigation';
import Container from '../сontainer/Container'
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";



const Header = () => {
    const onlyWidth = useWindowWidth();

    const [modal, setModal] = useState(false);

    const body = document.querySelector("body");

    const modalHandler = () => {
        if (!modal) {
            body.classList.add(styles.body);
        } else body.classList.remove(styles.body);
        setModal(!modal);
    };

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Logo />
                    {onlyWidth < 1199 ? <button
                        type="button"
                        className={styles.btn}
                        aria-label="menu"
                        onClick={modalHandler}
                    >
                        {!modal && (
                            <img
                                src={burger}
                                alt="open menu"
                                aria-label="open menu"
                                width="39"
                                height="39"
                            />
                        )}
                        {modal && (
                            <img
                                src={close}
                                alt="close menu"
                                aria-label="close menu"
                                width="39"
                                height="39"
                            />
                        )}
                    </button>
                        : <Navigation />
                    }
                    {modal && (
                        <MenuModal>
                            <Navigation onModalClose={modalHandler} />
                        </MenuModal>
                    )}
                </div>
            </Container>
            <div className={styles.wrapperContent}>
                <h1 className={styles.title}>
                    Надаємо послуги з сертифікації та оцінки відповідності технічним регламентам
                </h1>
                <p className={styles.subtitle}>
                    Ми зберігаємо ваш час, ви отримуєте результат
                </p>
                <Link
                    className={styles.buttonLink}
                    to='form'
                    spy={true}
                    smooth={true}
                    duration={800}>
                    Отримати
                </Link>
            </div>
            <img className={styles.bcLogoMin} src={bcLogoMin} alt="bcLogoMin" />
        </header>
    );
};

export default Header;