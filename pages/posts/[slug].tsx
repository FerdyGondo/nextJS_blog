import { constants } from "buffer";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";


const PostDetail = (props) => {
    console.log('PostDetail', props.post)
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name='desc' content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post}/>
        </Fragment>
    )
};

export const getStaticProps = (context) => {
    const {params} = context;
    const { slug } = params;

    const postData = getPostData(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 60
    };
}

export const getStaticPaths = () => {
    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/,''));

    return {
        // paths: [{params: slug: {}}]
        paths: slugs.map(slug => ({
            params:{
                slug: slug
            }
        })),
        fallback: false
    }
}
export default PostDetail;
