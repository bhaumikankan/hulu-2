import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../Utils/request";

export default function Home({result}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Best app to get movie data||HULU 2.0" />
        <mete property="og:image"  content="https://links.papareact.com/ua6"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <Header />
      <Nav />
      <Results result={result}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = context.query.genre;
  const res=await fetch(`https://api.themoviedb.org/3${request[query]?.url||request.fetchTrending.url}`);
  const data=await res.json();
  return {
    props: {
      result:data
    },
  };
}
