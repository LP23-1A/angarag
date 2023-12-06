import Logos from "@/components/Logos";
import Logos2 from "@/components/Logo_miid";
import Cards from "@/components/stat";
import { Githubb, Twit, Figma, Sun, Moon } from "@/components/icon";
import Man from "@/components/SagarImg";
import Location from "@/components/Location";
import MnTwo from "@/components/Sagar2";
import CRdimg from "@/components/CardImg";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const DarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <section className={`${isDark && "black-theme"}`}>
      <section className="Boddy">
        <div className="dark03">
          <header className="all">
            <div className="flx">
              <div>
                <h1 className="ttles_color">LOGO</h1>
              </div>
              <div className="flx">
                <ul className="flx lis">
                  <li className="Pcolor">About</li>
                  <li className="Pcolor">Work</li>
                  <li className="Pcolor">Testimonials</li>
                  <li className="Pcolor">Contact</li>
                </ul>
                <button onClick={DarkMode} className="Swtich-ligth">
                  {<Sun />}
                </button>
                <button onClick={DarkMode} className="Swtich-dark">
                  {<Moon />}
                </button>
                <button className="down">Download SV</button>
              </div>
            </div>
          </header>
        </div>
        <div className="dark03">
          <div className="main gap48_2 flx">
            <div className="gap_48">
              <div className="text">
                <h1 className="sagar">Hi, I'M Sagar</h1>
                <p className="ts">
                  I'm a full stack developer (React.js & Node.js) with a focus
                  on creating (and occasionally designing) <br /> exceptional
                  digital experiences that are fast, accessible, visually
                  appealing, and responsive. Even <br /> though I have been
                  creating web applications for over 7 years, I still love it as
                  if it was something new.
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
        </div>
        <div className=" midd_container dark11">
          <div className="disll">
            <button className="about">About me</button>
          </div>
          <div className="flx gap48_2">
            <div className="po-rela">
              <div className="mid_gray "></div>
              <MnTwo />
            </div>
            <div>
              <h3 className="ttle">Curious about me? Here you have it:</h3>
              <div className="gap_16">
                <p className="ts">
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack <br /> development (React.js & Node.js). I am very
                  enthusiastic about bringing the <br /> technical and visual
                  aspects of digital products to life. User experience, pixel{" "}
                  <br /> perfect design, and writing clear, readable, highly
                  performant code matters <br />
                  to me.
                </p>
                <p className="ts">
                  {" "}
                  I began my journey as a web developer in 2015, and since then,
                  I've <br />
                  continued to grow and evolve as a developer, taking on new
                  challenges and <br /> learning the latest technologies along
                  the way. Now, in my early thirties, 7 <br /> years after
                  starting my web development journey, I'm building cutting-edge{" "}
                  <br /> web applications using modern technologies such as
                  Next.js, TypeScript, <br /> Nestjs, Tailwindcss, Supabase and
                  much more.
                </p>
                <p className="ts">
                  I am very much a progressive thinker and enjoy working on
                  products end to <br />
                  end, from ideation all the way to development.
                </p>
                <p className="ts">
                  When I'm not in full-on developer mode, you can find me
                  hovering around on <br /> twitter or on indie hacker,
                  witnessing the journey of early startups or <br /> enjoying
                  some free time. You can follow me on Twitter where I share
                  tech- <br />
                  related bites and build in public, or you can follow me on
                  GitHub.
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
                  free to reach out and <br /> say hello! I promise I don't bite
                  😉
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dark03">
          <div className="main disll gap_48">
            <div className="disll button_and_text">
              <button className="about">Skills</button>
              <p className="ts">
                The skills, tools and technologies I am really good at:
              </p>
            </div>
            <div className="wrp">
              <Logos />
            </div>
            <div className="wrp">
              <Logos2 />
            </div>
            <div></div>
          </div>
        </div>
        <div className="midd_container gap_48 disll dark11">
          <div className="disll button_and_text">
            <button className="about">Experience</button>
            <p className="ts">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
          <div className="gap_48">
            <Cards />
          </div>
        </div>
        <div className="dark03">
          <div className="main gap_48 disll">
            <div className="disll button_and_text">
              <button className="about">Work</button>
              <p className="ts">
                Some of the noteworthy projects I have built:
              </p>
            </div>
            <div className="fllx">
              <div className="pad48 card_img">
                <CRdimg />
              </div>
              <div className="pad48 card_ritght">
                <h2>Fiskil</h2>
                <p className="ts">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante{" "}
                  <br /> ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia <br /> curae.
                </p>
                <div className="bttuns">
                  <button className="about">React</button>
                  <button className="about">Next.js</button>
                  <button className="about">Typescript</button>
                  <button className="about">Nest.js</button>
                  <button className="about">PostgreSQL</button>
                  <button className="about">Tailwindcss</button>
                  <button className="about">Figma</button>
                  <button className="about">Cypress</button>
                  <button className="about">Storybook</button>
                  <button className="about">Git</button>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="fllx">
              <div className="pad48 card_ritght">
                <h2>Fiskil</h2>
                <p className="ts">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante{" "}
                  <br /> ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia <br /> curae.
                </p>
                <div className="bttuns">
                  <button className="about">React</button>
                  <button className="about">Next.js</button>
                  <button className="about">Typescript</button>
                  <button className="about">Nest.js</button>
                  <button className="about">PostgreSQL</button>
                  <button className="about">Tailwindcss</button>
                  <button className="about">Figma</button>
                  <button className="about">Cypress</button>
                  <button className="about">Storybook</button>
                  <button className="about">Git</button>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="pad48 card_img">
                <CRdimg />
              </div>
            </div>
            <div className="fllx">
              <div className="pad48 card_img">
                <CRdimg />
              </div>
              <div className="pad48 card_ritght">
                <h2>Fiskil</h2>
                <p className="ts">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br />
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante{" "}
                  <br /> ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia <br /> curae.
                </p>
                <div className="bttuns">
                  <button className="about">React</button>
                  <button className="about">Next.js</button>
                  <button className="about">Typescript</button>
                  <button className="about">Nest.js</button>
                  <button className="about">PostgreSQL</button>
                  <button className="about">Tailwindcss</button>
                  <button className="about">Figma</button>
                  <button className="about">Cypress</button>
                  <button className="about">Storybook</button>
                  <button className="about">Git</button>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="dark03">
          <div className="main gap_48 disll">
            <div className="disll button_and_text fllx">
              <button className="about">Get in touch</button>
              <p className="ts fllx">
                What’s next? Feel free to reach out to me if you're looking for{" "}
                <br /> a developer, have a query, or simply want to connect.
              </p>
            </div>
            <div className="gap_16">
              <div className="disp_gap20">
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1>reachsagarshah@gmail.com</h1>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="disp_gap20">
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1>+91 8980500565</h1>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="gap_16 fllx">
              <p className="ts">You may also find me on these platforms!</p>
              <div className="fllx">
                <Githubb />
                <Twit />
                <Figma />
              </div>
            </div>
          </div>
        </div>
        <div className="footer dark11">
          <p> 2023 | Designed and coded with ❤️️ by Sagar Shah</p>
        </div>
      </section>
    </section>
  );
}
