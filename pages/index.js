import { Fragment } from 'react';

import Hero from '../src/components/homePage/Hero';
import FeaturedPosts from '../src/components/homePage/FeaturedPosts';
import { DUMMY_POSTS } from '../src/lib/dummy';

const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    );
};

export default HomePage;
