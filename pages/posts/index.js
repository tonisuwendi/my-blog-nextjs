import PropTypes from 'prop-types';

import AllPosts from '../../src/components/posts/AllPosts';
import { getAllPosts } from '../../src/lib/posts-util';

const AllPostsPage = ({ posts }) => {
    return <AllPosts posts={posts} />;
};

AllPostsPage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
};

AllPostsPage.defaultProps = {
    posts: [],
};

export const getStaticProps = () => {
    const AllPosts = getAllPosts();

    return {
        props: {
            posts: AllPosts,
        },
    };
};

export default AllPostsPage;
