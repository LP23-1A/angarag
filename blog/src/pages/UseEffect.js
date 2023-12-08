const data = [
    {
        Title:""
        desc:"";
        tags:"";
        series:"";
    }
];

export default function CreatePost() {
  return (
    <div className="flex">
      <div className="gap-[20px] flex flex-col">
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
          className="border w-[200px]"
        />
        <input type="text" className="border w-[200px]" />
        <input type="text" className="border w-[200px]" />
        <input type="text" className="border w-[200px]" />
        <button className="border">add post</button>
      </div>
    </div>
  );
}
