import classes from './all-posts.module.css';
import PostGrid from './post-grid';

const AllPosts = (props:any) => {

    return (
        <section className={classes.posts}>
            <h1>AllPosts</h1>
            <PostGrid posts={props.posts}/>
        </section>
    );
};

export default AllPosts;
