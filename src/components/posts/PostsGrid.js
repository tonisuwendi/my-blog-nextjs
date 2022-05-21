import PropTypes from 'prop-types';

import PostItem from './PostItem';
import styles from './PostsGrid.module.css';

const PostsGrid = ({ posts }) => {
    return (
        <ul className={styles.grid}>
            {posts.map((post) => (
                <PostItem key={post.slug} post={post} />
            ))}
        </ul>
    );
};

PostsGrid.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
};

PostsGrid.defaultProps = {
    posts: [],
};

export default PostsGrid;
