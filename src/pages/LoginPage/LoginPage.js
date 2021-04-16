import React from 'react';
import Container from '../../components/сontainer/Container';
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <Container>
            <img alt="oops" width='300' className={styles.imageError}
                src="https://lh3.googleusercontent.com/proxy/jcJUilNppeY-uXRXhT_fSZwYSt4PlHOAp9E37ZzqYLS7nbrcUajzlC7eP61ohhSTL6WN9lBH0bN3mVDQPI33" />
        </Container>
    );
};

export default LoginPage;