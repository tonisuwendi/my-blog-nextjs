import { Fragment } from 'react';
import PropTypes from 'prop-types';

import Hero from '../src/components/homePage/Hero';
import FeaturedPosts from '../src/components/homePage/FeaturedPosts';
import { getFeaturedPosts } from '../src/lib/posts-util';

const HomePage = ({ posts }) => {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={posts} />
        </Fragment>
    );
};

HomePage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
};

HomePage.defaultProps = {
    posts: [],
};

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
};

export default HomePage;
