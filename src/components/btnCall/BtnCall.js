import React from 'react';
import styles from './BtnCall.module.css'
import { Link, animateScroll as scroll } from "react-scroll";


const BtnCall = () => {
    return (
        <Link className={styles.btn}
            to='form'
            spy={true}
            smooth={true}
            duration={800}        >
            замовити дзвінок
        </Link>
    );
};

export default BtnCall;