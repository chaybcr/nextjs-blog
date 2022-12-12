import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturePosts } from "../lib/posts-util";

function HomePage(props) {
  const {posts} = props;
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPosts = getFeaturePosts();
  return{
    props:{
      posts:featuredPosts
    }
    //revalidate:60
  }
}

export default HomePage;
