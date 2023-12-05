import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trend";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="px-[350px]  justify-center items-center flex-col gap-[100px] flex w-[100%]">
      <Navbar />
      <Trending />
    </section>
  );
}
