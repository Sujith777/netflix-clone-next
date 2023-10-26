import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Modal from "@/components/Modal";

async function Home() {
  return (
    <main className="w-full h-full">
      <Modal />
      <Navbar />
      <Billboard />
      <MovieList />
    </main>
  );
}

export default Home;
