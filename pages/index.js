import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePicture from '@/public/images/profile/developer-pic-1.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen pt-0 ">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div>
              <Image
                src={profilePicture}
                alt="Picture of the author"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
