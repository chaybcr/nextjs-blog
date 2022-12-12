import AllPosts from "../../components/posts/all-posts";
import { getFeaturePosts } from "../../lib/posts-util";

 function AllPostsPage(props) {

    return <AllPosts posts={props.posts} />
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

 export default AllPostsPage;
