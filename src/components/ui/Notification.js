import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Notification.module.css';

const Notification = ({ title, message, status }) => {
    let statusClasses = '';

    if (status === 'success') {
        statusClasses = styles.success;
    }

    if (status === 'error') {
        statusClasses = styles.error;
    }

    const cssClasses = `${styles.notification} ${statusClasses}`;

    return ReactDom.createPortal(
        <div className={cssClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>,
        document.getElementById('notification')
    );
};

Notification.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    status: PropTypes.string,
};

Notification.defaultProps = {
    title: '',
    message: '',
    status: '',
};

export default Notification;
