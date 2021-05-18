import React, { useEffect, useState } from 'react';
import axios from "axios";
import Container from '../сontainer/Container';
import styles from './Form.module.css'

const initialData = {
    name: "",
    number: "",
    email: "",
    description: "",
    date: ""
}

const Form = () => {
    const [data, setData] = useState(initialData)
    const { name, number, email, description } = data

    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState('Поле не може бути пустим')

    const [numberDirty, setNumberDirty] = useState(false)
    const [numberError, setNumberError] = useState('Поле не може бути пустим')

    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('Поле не може бути пустим')

    const [desDirty, setDesDirty] = useState(false)
    const [desError, setDesError] = useState('Поле не може бути пустим')

    const [formValid, setFormValid] = useState(false)
    const [result, setResult] = useState({ status: null })

    useEffect(() => {
        if (emailError || nameError || numberError || desError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError, numberError, desError])

    const emailHandler = (e) => {
        setData((prev) => ({ ...prev, email: e.target.value }))
        if (emailDirty) {
            setEmailDirty(false)
        }
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!e.target.value) {
            setEmailError("Поле не може бути пустим")
        } else if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некоректний Email")
        } else {
            setEmailError('')
        }
    }
    const numberHandler = ({ target }) => {
        setData((prev) => ({ ...prev, number: target.value }))
        if (numberDirty) {
            setNumberDirty(false)
        }
        const re = /^[ 0-9]+$/

        if (!target.value) {
            setNumberError('Поле не може бути пустим')
        } else if (!re.test(target.value)) {
            setNumberError('Некоректний номер')
        }
        else {
            setNumberError('')
        }
    }
    const nameHandler = ({ target }) => {
        setData((prev) => ({ ...prev, name: target.value }))
        if (nameDirty) {
            setNameDirty(false)
        }
        if (!target.value) {
            setNameError('Поле не може бути пустим')
        } else {
            setNameError('')
        }
    }

    const descHandler = ({ target }) => {
        setData((prev) => ({ ...prev, description: target.value }))
        if (desDirty) {
            setDesDirty(false)
        }
        if (!target.value) {
            setDesError('Поле не може бути пустим')
        } else {
            setDesError("")
        }
    }
    const handleBlur = ({ target }) => {
        switch (target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'number':
                setNumberDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
            case "description":
                setDesDirty(true)
                break;
            default:
        }
    }



    const postOrder = async (newOrder) => {
        try {
            // const result =
            await axios.post('https://bcecolar.herokuapp.com/call', { ...newOrder })
            // console.log(result);
            // console.log(newOrder);
            setResult({ status: "ok" })
            setData(initialData)
        } catch (error) {
            console.log(error);
            setResult({ status: "error" })
        }
    }
    const currentDateTime = () => {
        const currentDate = new Date()
        const Year = currentDate.getFullYear();
        const Month = currentDate.getMonth();
        const Day = currentDate.getDate();
        const Hour = currentDate.getHours();
        const Minutes = currentDate.getMinutes();
        const Seconds = currentDate.getSeconds();
        return `${Day}.${Month + 1}.${Year} ${Hour}:${Minutes}:${Seconds}`
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newOrder = {
            name,
            number,
            email,
            description,
            date: currentDateTime()
        }
        postOrder(newOrder)
    }

    return (
        <section className={styles.section_form} id='form'>
            <Container>
                <h2 className={styles.title}>Залиште контакти і ми з Вами зв'яжемось</h2>
                <form className={styles.form_wrapper} onSubmit={submitHandler}>
                    <div className={styles.wrapperAll}>
                        <div className={styles.boxInput}>
                            <div className={styles.box}>
                                <label className={styles.form_label} htmlFor='name'>Ім'я *</label>
                                <input type='text'
                                    name='name'
                                    id='name'
                                    className={styles.form_input}
                                    placeholder="Ім'я"
                                    value={name}
                                    onChange={nameHandler}
                                    onBlur={handleBlur} />
                                {nameDirty && nameError && <p className={styles.err_msg}>{nameError}</p>}
                            </div>
                            <div className={styles.box}>
                                <label className={styles.form_label} htmlFor='number'>Телефон *</label>
                                <input type='text'
                                    name='number'
                                    id='number'
                                    placeholder='380000000000'
                                    className={styles.form_input}
                                    value={number}
                                    onChange={numberHandler}
                                    onBlur={handleBlur} />
                                {numberDirty && numberError && <p className={styles.err_msg}>{numberError}</p>}
                            </div>
                            <div className={styles.box}>
                                <label className={styles.form_label} htmlFor='email'>Пошта *</label>
                                <input type='text'
                                    name='email'
                                    id='email'
                                    className={styles.form_input}
                                    placeholder='example@email.com'
                                    value={email}
                                    onChange={emailHandler}
                                    onBlur={handleBlur} />
                                {emailDirty && emailError && <p className={styles.err_msg}>{emailError}</p>}
                            </div>
                        </div>
                        <div className={styles.boxTextarea}>
                            <label className={styles.form_label} htmlFor='description'>Повідомлення *</label>
                            <textarea id='description'
                                name='description'
                                className={styles.form_input}
                                value={description}
                                onChange={descHandler}
                                onBlur={handleBlur}
                                cols="30"
                                rows="12"
                                placeholder="Ваше повідомлення"
                            />
                            {desDirty && desError && <p className={styles.err_msg}>{desError}</p>}
                        </div>
                    </div>
                    <button disabled={!formValid} type='submit' className={!formValid ? styles.dis_btn : styles.button}>Відправити</button>
                    {
                        result.status == null ? ""
                            : result.status === "ok"
                                ? <p className={styles.resultOk}>Ваша заявка успішно відправлена.</p>
                                : result.status === "error"
                                    ? <p className={styles.resultError}>Помилка, спробуйте ще раз.</p>
                                    : ""
                    }
                </form>
            </Container>
        </section >
    );
};

export default Form;