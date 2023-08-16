import FeaturedPost from "@/components/home-page/featured-post";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

// const DATA=[
//   {
//     slug:'getting-started-nextjs', 
//     title: 'title',
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next js excerpt',
//     date: '2022-02-10', 
//   },
//   {
//       slug:'getting-started-nextjs', 
//       title: 'title2',
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next js excerpt2',
//     date: '2022-02-12', 
//   },
//   {
//       slug:'getting-started-nextjs', 
//       title: 'title3',
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next js excerpt3',
//     date: '2022-02-13', 
//   },
//   {
//       slug:'getting-started-nextjs', 
//       title: 'title4',
//     image: 'getting-started-nextjs.png',
//     excerpt: 'Next js excerpt4',
//     date: '2022-02-14', 
//   },
// ];

const HomePage = (props) => {
  console.log('props.posts', props.posts);
  return (
    <Fragment>
      <Head>
        <title>Max</title>
        <meta 
          name='desc'
          content='dev'
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts}/>
    </Fragment>
  )
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 10
  }
};

export default HomePage;

