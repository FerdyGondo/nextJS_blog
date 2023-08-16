import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export const getPostData = (fileName:any) => {
    const postSlug = fileName.replace(/\.md$/, '' )//remove file ext
    const filePath = path.join(postsDir, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath,'utf-8');
    const {data, content} = matter(fileContent);
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
}

export const getPostsFiles = () => {
    return fs.readdirSync(postsDir);
}
export const getAllPosts = () => {
    // const postFiles = fs.readdirSync(postsDir);
    const postFiles = getPostsFiles();
    // for (const postFile of postFiles){
    //     const postData = getPostData(postFile);
    // }
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((postA:any, postB:any) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}