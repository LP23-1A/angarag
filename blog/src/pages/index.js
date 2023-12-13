import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Cards from "@/components/Trend";
import Blog from "@/components/Blog";
import Foot from "@/components/Footer";
import Cras from "@/components/Crausel";
import Miss from "@/components/Error";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="  justify-center flex-col gap-[100px] flex w-[100%]">
      <Navbar />
      <Cras />
      <Blog />
      <Foot />
    </section>
  );
}
