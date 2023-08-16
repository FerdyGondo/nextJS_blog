import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts, getFeaturedPosts } from "../../lib/posts-util";
import Head from "next/head";
// const DATA=[
//     {
//       slug:'getting-started-nextjs', 
//       title: 'title',
//       image: 'getting-started-nextjs.png',
//       excerpt: 'Next js excerpt',
//       date: '2022-02-10', 
//     },
//     {
//         slug:'getting-started-nextjs', 
//         title: 'title2',
//       image: 'getting-started-nextjs.png',
//       excerpt: 'Next js excerpt2',
//       date: '2022-02-12', 
//     },
//     {
//         slug:'getting-started-nextjs', 
//         title: 'title3',
//       image: 'getting-started-nextjs.png',
//       excerpt: 'Next js excerpt3',
//       date: '2022-02-13', 
//     },
//     {
//         slug:'getting-started-nextjs', 
//         title: 'title4',
//       image: 'getting-started-nextjs.png',
//       excerpt: 'Next js excerpt4',
//       date: '2022-02-14', 
//     },
//   ];
  
const AllPostPage = (props) => {
    console.log('AllPostPage props.post', props.posts);
    return (
      <Fragment>
        <Head>
          <title>All Posts</title>
          <meta name='desc' content="all post" /> 
        </Head>
        <AllPosts posts={props.posts}/>
      </Fragment>
    )
  
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
    },
    revalidate: 1
  }
}
export default AllPostPage;
