import Head from "@/components/header";
import Pro from "@/components/profile";
import Midd from "@/components/middle";

export default function Home() {
  return (
    <div className="Boddy">
      <header>
        <Head />
      </header>
      <Pro />
      <Midd/>
    </div>
  );
}
