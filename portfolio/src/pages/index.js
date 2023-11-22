import Head from "@/components/header";
import Pro from "@/components/profile";
import Midd from "@/components/middle";
import Icons from "@/components/Logos";

export default function Home() {
  return (
    <div className="Boddy">
      <header>
        <Head />
      </header>
      <Pro />
      <Midd />
      <Icons />
    </div>
  );
}
