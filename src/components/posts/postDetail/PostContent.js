import Image from 'next/image';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import PostHeader from './PostHeader';
import { imagePath } from '../../../lib/utils';
import styles from './PostContent.module.css';

SyntaxHighlighter.registerLanguage('js', js);

const PostContent = ({ post }) => {
    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={styles.image}>
                        <Image
                            src={imagePath(post.slug, image.properties.src)}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1];

            return (
                <SyntaxHighlighter
                    style={oneDark}
                    language={language}
                    children={children}
                />
            );
        },
    };

    return (
        <article className={styles.content}>
            <PostHeader
                title={post.title}
                image={imagePath(post.slug, post.image)}
            />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
};

PostContent.propTypes = {
    post: PropTypes.shape(),
};

PostContent.defaultProps = {
    post: {},
};

export default PostContent;
