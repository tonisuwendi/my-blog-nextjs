import PropTypes from 'prop-types';

import PostsGrid from '../posts/PostsGrid';
import styles from './FeaturedPosts.module.css';

const FeaturedPosts = ({ posts }) => {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
};

FeaturedPosts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
};

FeaturedPosts.defaultProps = {
    posts: [],
};

export default FeaturedPosts;
