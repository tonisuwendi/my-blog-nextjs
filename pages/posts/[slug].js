import PropTypes from 'prop-types';

import PostContent from '../../src/components/posts/postDetail/PostContent';
import { getPostData, getPostsFiles } from '../../src/lib/posts-util';

const DetailPostPage = ({ post }) => {
    return <PostContent post={post} />;
};

DetailPostPage.propTypes = {
    post: PropTypes.shape(),
};

DetailPostPage.defaultProps = {
    post: {},
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
