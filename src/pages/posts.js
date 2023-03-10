import { getPosts } from "@/utils/wordpress";
import Post from "../components/Post";

const Posts = (props) => {
  const posts = props.posts;
  const jsxPosts = posts.map((post) => {
    const featuredMedia = post["_embedded"]["wp:featuredmedia"]
      ? post["_embedded"]["wp:featuredmedia"][0]
      : "";
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>{jsxPosts}</div>
        </div>
      </section>
    </>
  );
};

export default Posts;
export async function getServerSideProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}
