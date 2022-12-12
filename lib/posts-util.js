import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts');

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
  }

export function getPostData(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/,'') //removes file extension
    const filePath = path.join(postsDirectory,`${postSlug}.md`)
   const fileContent = fs.readFileSync(filePath,'utf-8');
   const {data,content} = matter(fileContent);

   const postData = {
       slug:postSlug,
       ...data,
       content
   }

   return postData;
}

export function getAllPosts(){
    const postFiles =  getPostsFiles();

    const allPosts = postFiles.map(postfile =>{
        return getPostData(postfile)
    })
   const sortedPosts =  allPosts.sort((postA,postB) => postA.date > postB.date ? -1 : 1);

   return sortedPosts;
}

export function getFeaturePosts(){
    const allPosts = getAllPosts();

    const featuresPosts = allPosts.filter(x=>x.isFeatured);

    return featuresPosts;
}