let data = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: "javascript",
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
