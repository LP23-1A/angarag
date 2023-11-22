import MnTwo from "./Sagar2";

export default function Midd() {
  return (
    <div className="main midd_container">
      <div className="disll">
        <button className="about">About me</button>
      </div>
      <div className="flx gap48_2">
        <div>
          <div className="gray"></div>
          <MnTwo />
        </div>
        <div>
          <h3 className="ttle">Curious about me? Here you have it:</h3>
          <div className="gap_16">
            <p className="ts">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack <br /> development (React.js & Node.js). I am very
              enthusiastic about bringing the <br /> technical and visual
              aspects of digital products to life. User experience, pixel <br />{" "}
              perfect design, and writing clear, readable, highly performant
              code matters <br />
              to me.
            </p>
            <p className="ts">
              {" "}
              I began my journey as a web developer in 2015, and since then,
              I've <br />
              continued to grow and evolve as a developer, taking on new
              challenges and <br /> learning the latest technologies along the
              way. Now, in my early thirties, 7 <br /> years after starting my
              web development journey, I'm building cutting-edge <br /> web
              applications using modern technologies such as Next.js,
              TypeScript, <br /> Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="ts">
              I am very much a progressive thinker and enjoy working on products
              end to <br />
              end, from ideation all the way to development.
            </p>
            <p className="ts">
              When I'm not in full-on developer mode, you can find me hovering
              around on <br /> twitter or on indie hacker, witnessing the
              journey of early startups or <br /> enjoying some free time. You
              can follow me on Twitter where I share tech- <br />
              related bites and build in public, or you can follow me on GitHub.
            </p>
            <p className="ts">Finally, some quick bits about me.</p>
            <ul className="ul_gap">
              <div>
                <li className="ts">B.E. in Computer Engineering</li>
                <li className="ts">Full time freelancer</li>
              </div>
              <div>
                <li className="ts">Avid learner</li>
                <li className="ts">Aspiring indie hacker</li>
              </div>
            </ul>
            <p className="ts">
              {" "}
              Copy One last thing, I'm available for freelance work, so feel
              free to reach out and <br /> say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
