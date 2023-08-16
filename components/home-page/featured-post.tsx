
import PostGrid from '../posts/post-grid';
import classes from './featured-posts.module.css';

const FeaturedPost = (props:any) => {
    console.log('FeaturedPost props', props);
    return (
        <section className={classes.latest}>
            <h2>FeaturedPost</h2>
            <PostGrid posts={props.posts} />
        </section>
    );
};

export default FeaturedPost;