import { useState } from 'react';

import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const sendMessageHandler = async (event) => {
        event.preventDefault();

        const inputData = {
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage,
        };
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(inputData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            console.log(data);
            setEnteredEmail('');
            setEnteredName('');
            setEnteredMessage('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={styles.contact}>
            <h1>How can I help yout?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={enteredEmail}
                            onChange={(event) =>
                                setEnteredEmail(event.target.value)
                            }
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={enteredName}
                            onChange={(event) =>
                                setEnteredName(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        required
                        value={enteredMessage}
                        onChange={(event) =>
                            setEnteredMessage(event.target.value)
                        }
                    ></textarea>
                </div>
                <div className={styles.actions}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
