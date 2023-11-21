import Location from "@/components/Location";
import Githubb from "./git";
import Twit from "./twit";
import Figma from "./figma";
import Man from "./SagarImg";

export default function Pro() {
  return (
    <div className="main flx">
      <div className="gap_48">
        <div className="text">
          <h1 className="sagar">Hi, I'M Sagar</h1>
          <p className="ts">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) <br /> exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even <br /> though I have been creating web applications
            for over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="gap_16">
          <div className="fllx gap_8">
            <Location />
            <p className="ts">Available for new projects</p>
          </div>
          <div className="fllx gap_8">
            <p className="green"></p>
            <p className="ts"> Available for new projects</p>
          </div>
        </div>
        <div className="fllx">
          <Githubb />
          <Twit />
          <Figma />
        </div>
      </div>
      <div className="po-rela">
        <div className="gray po-abs"></div>
        <Man />
      </div>
    </div>
  );
}
