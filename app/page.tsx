import Image from "next/image";
import Header from "../components/Header"
import Nav from "../components/Nav"
import Results from "../components/Results"
import requests from "../utils/requests"


export const metadata = {
  title: "hulu2.0"
};

export default async function Home({ searchParams }: { searchParams: Promise<{ genre?: string }> }) {
  const { genre } = await searchParams;

  const request = requests[genre as keyof typeof requests] || requests.fetchTrending;
  const res = await fetch(`https://api.themoviedb.org/3${request.url}`);
  const data = await res.json();

  return (
    <div className="">
      <Header />
      <Nav />
      <Results genre={genre} results={data.results} />

    </div>
  );
}