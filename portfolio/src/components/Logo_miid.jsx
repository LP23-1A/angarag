let Data2 = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    content: "PostgreSQL",
  },
  {
    url: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
    content: "MongoDB",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    content: "Sass/Scss",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    content: "Tailwindcss",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    content: "Figma",
  },
  {
    url: "https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg?updated=1667565306852",
    content: "Cypress",
  },
  {
    url: "https://www.svgrepo.com/show/354397/storybook-icon.svg",
    content: "Storybook",
  },
  {
    url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    content: "Git",
  },
];


export default function Logos2() {
  return (
    <>
      {Data2.map((e) => {
        return (
          <div className="Icon-dev">
            <img className="img-icons" src={e.url} alt="" />
            <p className="icon-txt">{e.content}</p>
          </div>
        );
      })}
    </>
  );
}
