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
                    Надаемо сертифікації та оцінки відповідно технічним регламентам
                </h1>
                <p className={styles.subtitle}>
                    З нашою допомогою Ви зможете отримати необхідну інформацію по всім питанням, пов’язаним з отриманням сертифікатів та іншим дозвільних документів для ввозу та реалізації продукції на території України.
                </p>
                <a className={styles.buttonLink} href="#about">Call back</a>
            </div>
            <img className={styles.bcLogoMin} src={bcLogoMin} alt="bcLogoMin" />

        </header>
    );
};

export default Header;