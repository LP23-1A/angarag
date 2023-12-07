import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Cards from "@/components/Trend";
import Blog from "@/components/Blog";
import Foot from "@/components/Footer";
import cras from "@/components/Crausel";
import Contact from "@/components/ContactUs";
import Miss from "@/components/Error";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="  justify-center flex-col gap-[100px] flex w-[100%]">
      <Navbar />
      <Blog />
      <Foot />
    </section>
  );
}
