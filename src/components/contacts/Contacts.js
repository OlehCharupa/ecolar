import React from 'react';
import Container from '../сontainer/Container';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <Container>
                <h2 className={styles.title}>Контакти</h2>
                <div className={styles.wrapper}>
                    <ul className={styles.address_list}>
                        <li className={styles.address_item}>
                            <h3 className={styles.subtitle}>Адреса:</h3>
                            <a className={styles.addressLink} href="https://goo.gl/maps/9wy8s2nZnc1rWjf17" >м. Київ, вул. Солом'янська, 1, офіс 201</a>
                        </li>
                        <li className={styles.address_item}>
                            <h3 className={styles.subtitle}>Почта:</h3>
                            <a href="mailto:example@mail.com" className={styles.addressLink}>example@mail.com</a>
                        </li>
                        <li className={styles.address_item}>
                            <h3 className={styles.subtitle}>Телефон:</h3>
                            <a href="tel:+380001111111" className={styles.addressLink}>+38 000 111 11 11</a>
                        </li>
                    </ul>
                    <div className={styles.wrapperMap}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5554932501555!2d30.47097331508157!3d50.430752979472665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cebf74d6bd5b%3A0x24f7c2c128e9dfd8!2z0YPQuy4g0KHQvtC70L7QvNC10L3RgdC60LDRjywgMSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1618694547371!5m2!1sru!2sua"
                            className={styles.map}
                            allowfullscreen=""
                            loading="lazy"
                            title='map'></iframe>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;