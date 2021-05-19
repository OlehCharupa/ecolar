import React from 'react';
import Container from '../сontainer/Container'
import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.about} id='about'>
            <Container>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>ТОВ "Еколар"</h2>
                    <p className={styles.text}>Створене для надання українським та іноземним виробникам, а також постачальникам всіх видів <span className={styles.spanText}>послуг з проведення робіт із сертифікації та оцінки відповідності технічним регламентам</span>.</p>
                    <p className={styles.text2}>З нашою допомогою ви зможете отримати інформацію з усіх питань, пов'язаних з отриманням сертифікатів та інших дозвільних документів для ввозу та реалізації продукції на території України.</p>
                </div>
            </Container>
        </section>
    );
};

export default About;