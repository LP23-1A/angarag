import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Trending from "@/components/Trend";
import Blog from "@/components/Blog";
import Foot from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="  justify-center flex-col gap-[100px] flex w-[100%]">
      <Navbar />
      <Foot />
    </section>
  );
}
