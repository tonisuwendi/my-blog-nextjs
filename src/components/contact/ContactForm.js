import { useState, useEffect } from 'react';

import Notification from '../ui/Notification';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        let timer;
        if (notification?.status !== 'pending') {
            timer = setTimeout(() => {
                setNotification(null);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [notification]);

    const sendMessageHandler = async (event) => {
        event.preventDefault();

        setLoading(true);
        setNotification({
            title: 'Sending message...',
            message: 'Your message is on its way!',
            status: 'pending',
        });
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
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }
            setNotification({
                title: 'Success!',
                message: 'Message send successfully!',
                status: 'success',
            });
            resetFormHandler();
        } catch (error) {
            setNotification({
                title: 'Error!',
                message: error.message,
                status: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    const resetFormHandler = () => {
        setEnteredEmail('');
        setEnteredName('');
        setEnteredMessage('');
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
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Send Message'}
                    </button>
                </div>
            </form>
            {notification && (
                <Notification
                    title={notification.title}
                    message={notification.message}
                    status={notification.status}
                />
            )}
        </section>
    );
};

export default ContactForm;
