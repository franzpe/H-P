import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Something from main</main>
      <footer>Whatever footer</footer>
    </div>
  );
}
