import React from 'react';
import BtnCall from '../btnCall/BtnCall';
import Container from '../сontainer/Container'
import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.bc_image}>
            <Container>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Про нас</h1>
                    <p className={styles.text}>ТОВ "Еколар" створена для надання українським на іноземним виробникам, а також постачальникам всіх видів послуг з проведення робіт з сертифікації та оцінки відповідності технічним регламентам. З нашою допомогою Ви зможете отримати необхідну інформацію по всім питанням, пов*язаним з отриманням сертифікатів та іншим дозвільних документів для ввозу та реалізації продукції на території України. </p>
                    <BtnCall />
                </div>
            </Container>
        </section>
    );
};

export default About;