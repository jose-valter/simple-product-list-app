import React from 'react';
import styles from './Contact.module.css';
import pic from '../Img/contact.jpg'
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
        <Head title='Ranek | Contact' description='Contact us'/>
        <img src={pic} alt="Typewriter" />
        <div>
            <h1>Entre em contato</h1>
            <ul className={styles.dados}>
                <li>valter@g</li>
                <li>99999-9999</li>
            </ul>
        </div>
    </section>
  )
}

export default Contact