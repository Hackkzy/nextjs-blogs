import { getPosts } from "@/utils/wordpress";
import Post from "../components/Post";

const Posts = (props) => {
  const posts = props.posts;
  const jsxPosts = posts.map((post) => {
    // const featuredMedia = post["_embedded"]["wp:featuredmedia"][0];
    return <Post post={post} featuredMedia={""} key={post.id} />;
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

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 10, // In seconds
  };
}

export default Posts;
