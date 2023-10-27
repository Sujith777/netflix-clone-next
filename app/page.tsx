import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Modal from "@/components/Modal";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Auth from "./auth/page";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth");
  }

  return (
    <main className="w-full h-full">
      <Modal />
      <Navbar />
      <Billboard />
      <MovieList />
    </main>
  );
};

export default Home;
