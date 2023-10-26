import { NextRequest } from "next/server";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import serverAuth from "@/lib/serverAuth";
import MovieList from "@/components/MovieList";
import Modal from "@/components/Modal";

export default async function Home() {
  return (
    <main className="w-full h-full">
      <Modal />
      <Navbar />
      <Billboard />
      <MovieList />
    </main>
  );
}
