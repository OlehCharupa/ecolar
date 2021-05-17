import React, { useState } from 'react';
import Container from '../сontainer/Container';
import styles from './Services.module.css'
import { servicesName } from '../../data/product.js'

const Services = () => {

    const [filter, setFilter] = useState("")

    const inputFilter = ({ target }) => {
        setFilter(target.value)
    }
    const filterName = () => {
        const filterArray = servicesName.filter(product => product.title.toLowerCase().includes(filter.toLowerCase()))
        if (filterArray.length >= 1) {
            return filterArray
        } else {
            return servicesName
        }
    }
    return (
        <section className={styles.services} id='services'>
            <Container>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Послуги</h2>
                    <label className={styles.label} >
                        <input
                            type="text"
                            name="filter"
                            className={styles.inputSearch}
                            value={filter}
                            onChange={inputFilter}
                        />
                    </label>
                </div>
                <ul className={styles.list}>
                    {filterName().map(elem =>
                        <li className={styles.item} key={elem.id}>
                            <div className={styles.wrapperImg}>
                                <img className={styles.image} src={elem.image} alt="img" />
                            </div>
                            <div className={styles.wrapperContent}>
                                <h3 className={styles.titleCard}>{elem.title}</h3>
                            </div>
                        </li>)}
                </ul>
            </Container>
        </section>
    );
};

export default Services;