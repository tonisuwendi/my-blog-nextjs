import ReactMarkdown from 'react-markdown';

import PostHeader from './PostHeader';
import { DUMMY_POST } from '../../../lib/dummy';
import { imagePath } from '../../../lib/utils';
import styles from './PostContent.module.css';

const PostContent = () => {
    return (
        <article className={styles.content}>
            <PostHeader
                title={DUMMY_POST.title}
                image={imagePath(DUMMY_POST.slug, DUMMY_POST.image)}
            />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
