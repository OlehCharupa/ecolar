import React, { useState } from 'react';
import Logo from '../logo/Logo';
import styles from './Header.module.css'
import { useWindowWidth } from "@react-hook/window-size";
import burger from "./images/burger.svg";
import close from "./images/close.svg";
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
                                width="32"
                                height="32"
                            />
                        )}
                        {modal && (
                            <img
                                src={close}
                                alt="close menu"
                                aria-label="close menu"
                                width="32"
                                height="32"
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
        </header>
    );
};

export default Header;