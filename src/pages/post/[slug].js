import Link from "next/link";

import { getPost, getSlugs } from "@/utils/wordpress";

export default function PostPage({ post }) {
  return (
    <>
      <section class='text-gray-400 body-font bg-gray-900'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='flex flex-col text-center w-full mb-20'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              {post.title.rendered}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
          </div>
          <Link
            href={"/posts"}
            className='text-green-400 inline-flex items-center md:mb-2 lg:mb-0'
          >
            Go Back
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
