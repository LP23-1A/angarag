let data = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "Javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
    content: "Typescript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    content: "React",
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    content: "Next.js",
  },
  {
    url: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    content: "Node.js",
  },
  {
    url: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
    content: "Express.js",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
    content: "Nest.js",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    content: "Socket.io",
  },
];

export default function Logos() {
  return (
    <>
      {data.map((el) => {
        return (
          <div className="Icon-dev">
            <img className="img-icons" src={el.url} alt="" />
            <p className="icon-txt">{el.content}</p>
          </div>
        );
      })}
    </>
  );
}