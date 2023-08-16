import PostItem from './post-item';
import classes from './posts-grid.module.css';

const PostGrid = (props:any) => {
    const {posts} = props;
    console.log('PostGrid posts', posts);
    return (
        <ul className={classes.grid}>            
            {posts.map( (post:any) => (
                <PostItem key={post.slug} postProp={post} />
            ))}
        </ul>
    );
};

export default PostGrid;
