import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Mid from "@/components/Mid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="px-[350px]  justify-center items-center flex w-[100%]">
      <Navbar />
      <Mid />
    </section>
  );
}
