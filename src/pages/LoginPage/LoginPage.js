import React from 'react';
import Container from '../../components/сontainer/Container';
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <Container>
            <img alt="oops" width='300' className={styles.imageError}
                src="https://kulturnay-stolica.ru/wp-content/uploads/2019/10/1.jpg" />
        </Container>
    );
};

export default LoginPage;