import React from 'react';
import ContactForm from './ContactForm';
import './Contacts.css';

function Contacts() {
    return (
        <div className="contacts-container">
            <h1>Контакты</h1>
            <p>Если у вас есть вопросы, пожалуйста, заполните форму ниже, и мы свяжемся с вами как можно скорее.</p>
            
            <ContactForm />
        </div>
    );
}

export default Contacts;
