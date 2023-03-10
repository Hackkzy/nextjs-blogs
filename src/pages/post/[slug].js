import Link from "next/link";

import { getPost, getSlugs } from "@/utils/wordpress";

export default function PostPage({ post }) {
  return (
    <>
      <section className='text-gray-400 body-font bg-gray-900'>
        <div className='container px-5 py-12 mx-auto'>
          <div className='flex flex-col w-full mb-20 items-center'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              {post.title.rendered}
            </h1>
            <article className='mx-auto w-full max-w-2xl'>
              <div
                className='flex flex-col gap-4'
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
              <Link
                href={"/posts"}
                className='text-green-400 inline-flex items-center md:mb-2 lg:mb-0 py-5'
              >
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12H19' />
                  <path d='M10 19L3 12L10 5' />
                </svg>
                Go Back
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
  };
}
