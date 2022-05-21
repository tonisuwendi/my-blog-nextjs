import AllPosts from '../../src/components/posts/AllPosts';
import { DUMMY_POSTS } from '../../src/lib/dummy';

const AllPostsPage = () => {
    return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
