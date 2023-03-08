import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Blogs - Wordpress</title>
        <meta name='description' content='NextJS App with Wordpress Blogs' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
              NextPress
            </h1>
            <p className='mb-8 leading-relaxed'>
              WopdPress Blogs Using Next.Js
            </p>
            <div className='flex justify-center'>
              <Link
                href={"./posts"}
                className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
              >
                Browse Blogs
              </Link>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <Image
              className='object-cover object-center rounded'
              alt='hero'
              src='https://dummyimage.com/720x600'
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
}
