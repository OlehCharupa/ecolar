import React from 'react';
import Container from '../сontainer/Container';
import styles from './Form.module.css'

const Form = () => {
    return (
        <section className={styles.section_form}>
            <Container>
                <h2 className={styles.title}>Залиште контакти і ми з Вами зв*яжемось</h2>
                <form className={styles.form_wrapper}>
                    <div className={styles.box}>
                        <label className={styles.form_label} for='name'>Имя</label>
                        <input type='text' name='name' id='name' className={styles.form_input} />
                    </div>
                    <div className={styles.box}>
                        <label className={styles.form_label} for='number'>Телефон</label>
                        <input type='text' name='number' id='number' className={styles.form_input} />
                    </div>
                    <div className={styles.box}>
                        <label className={styles.form_label} for='email'>Почта</label>
                        <input type='text' name='email' id='email' className={styles.form_input} />
                    </div>
                    <div className={styles.box}>
                        <label className={styles.form_label}>Тема звернення</label>
                        <select className={styles.form_input}>
                            <option >ne vubran</option>
                            <option>variant 1</option>
                            <option>variant 2</option>
                        </select>
                    </div>
                    <button type='submit' className={styles.button}>Відправити</button>
                </form>
            </Container>
        </section>
    );
};

export default Form;