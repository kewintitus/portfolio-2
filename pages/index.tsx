import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kewin's Portfolio</title>
        <meta name="description" content="Portfolio website of kewin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-red-500 p-2">Lets begin</h1>
    </div>
  );
};

export default Home;
