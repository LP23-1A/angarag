import Head from "@/components/header";
import Pro from "@/components/profile";
import Midd from "@/components/middle";
import Logos from "@/components/Logos";

export default function Home() {
  return (
    <div className="Boddy">
      <header>
        <Head />
      </header>
      <Pro />
      <Midd />
      <div className="main disll gap_48">
        <div className="disll button_and_text">
          <button className="about">Skills</button>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="wrp">
          <Logos />
        </div>
        <div className="wrp">
          <Logos />
        </div>
      </div>
    </div>
  );
}
