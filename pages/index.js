import { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Hero from '../src/components/homePage/Hero';
import FeaturedPosts from '../src/components/homePage/FeaturedPosts';
import { getFeaturedPosts } from '../src/lib/posts-util';

const HomePage = ({ posts }) => {
    return (
        <Fragment>
            <Head>
                <title>Toni's Blog</title>
                <meta
                    name="description"
                    content="I post about programming and web development."
                />
            </Head>
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
