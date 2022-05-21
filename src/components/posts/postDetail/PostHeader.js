import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './PostHeader.module.css';

const PostHeader = ({ title, image }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={150} />
        </header>
    );
};

PostHeader.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
};

PostHeader.defaultProps = {
    title: '',
    image: '',
};

export default PostHeader;
