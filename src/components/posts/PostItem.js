import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

import { formattedDate, imagePath } from '../../lib/utils';
import styles from './PostItem.module.css';

const PostItem = ({ post: { title, image, excerpt, date, slug } }) => {
    return (
        <li className={styles.post}>
            <Link href={`/posts/${slug}`}>
                <a>
                    <div className={styles.image}>
                        <Image
                            src={imagePath(slug, image)}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate(date)}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

PostItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        excerpt: PropTypes.string,
        date: PropTypes.string,
        slug: PropTypes.string,
    }),
};

PostItem.defaultProps = {
    post: {
        title: '',
        image: '',
        excerpt: '',
        date: '',
        slug: '',
    },
};

export default PostItem;
