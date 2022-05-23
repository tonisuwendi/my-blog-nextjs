import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../src/components/contact/contactForm';

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Send me your message!" />
            </Head>
            <ContactForm />
        </Fragment>
    );
};

export default ContactPage;
