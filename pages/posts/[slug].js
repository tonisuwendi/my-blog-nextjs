import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import PostContent from '../../src/components/posts/postDetail/PostContent';
import { getPostData, getPostsFiles } from '../../src/lib/posts-util';

const DetailPostPage = ({ post }) => {
    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </Fragment>
    );
};

DetailPostPage.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        excerpt: PropTypes.string,
    }),
};

DetailPostPage.defaultProps = {
    post: {
        title: '',
        excerpt: '',
    },
};

export const getStaticProps = ({ params: { slug } }) => {
    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
};

export const getStaticPaths = () => {
    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({
            params: { slug },
        })),
        fallback: false,
    };
};

export default DetailPostPage;
