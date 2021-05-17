import React from 'react';
import styles from "./PlugLogin.module.css"
const PlugLogin = ({ toggleModal }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Особистий кабінет, знаходиться на етапі розробки.</h1>
            <p className={styles.text}>Побажання, що до функціоналу та інформації в особистому кабінеті, присилайте на адресу
             <a className={styles.link} href="mailto:ecolargroup@gmail.com"> ecolargroup@gmail.com.</a>
            </p>
        </div>
    );
};

export default PlugLogin;