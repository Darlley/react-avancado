import Head from 'next/head';

function Home({ title = 'React Avançado' }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>{title}</h1>
      </main>
    </div>
  );
}

export default Home;
