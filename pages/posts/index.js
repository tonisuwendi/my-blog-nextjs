import { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import AllPosts from '../../src/components/posts/AllPosts';
import { getAllPosts } from '../../src/lib/posts-util';

const AllPostsPage = ({ posts }) => {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta
                    name="description"
                    content="A list of all programming-related tutorials and posts!"
                />
            </Head>
            <AllPosts posts={posts} />
        </Fragment>
    );
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
