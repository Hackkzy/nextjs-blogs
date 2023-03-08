import Link from "next/link";
import Image from "next/image";

import { getDate } from "@/utils/wordpress";

export default function Post({ post, featuredMedia }) {
  return (
    <>
      <div className='p-4 md:w-1/3'>
        <div className='h-full border-2 border-gray-800 rounded-lg overflow-hidden'>
          {/* <Image
            className='lg:h-48 md:h-36 w-full object-cover object-center'
            src={featuredMedia["media_details"].sizes.medium["source_url"]}
            alt={featuredMedia["alt_text"]}
            width={180}
            height={120}
          /> */}
          <div className='p-6'>
            <h1 className='title-font text-lg font-medium text-white mb-3'>
              {post.title.rendered}
            </h1>
            <p
              className='leading-relaxed mb-3'
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></p>
            <div className='flex items-center flex-wrap '>
              <Link
                href={`/post/${post.slug}`}
                className='text-green-400 inline-flex items-center md:mb-2 lg:mb-0'
              >
                Learn More
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14' />
                  <path d='M12 5l7 7-7 7' />
                </svg>
              </Link>
              <span className='text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1'>
                {getDate(post.modified)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
