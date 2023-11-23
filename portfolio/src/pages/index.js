import Head from "@/components/header";
import Pro from "@/components/profile";
import Midd from "@/components/middle";
import Logos from "@/components/Logos";
import Logos2 from "@/components/Logo_miid";
import Cards from "@/components/stat";

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
          <Logos2/>
        </div>
      </div>
      <div className="midd_container gap_48 disll">
      <div className="disll button_and_text">
          <button className="about">Experience</button>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="gap_48">
        <Cards/>
        </div>
      </div>
    </div>
  );
}
