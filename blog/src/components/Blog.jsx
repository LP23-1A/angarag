const BlogData = [
  {
    url: "",
    buttn: "",
    content: "",
    date: "",
  },
];

export default function Blog() {
  return (
    <>
      <div className="flex flex-col gap-[32px] px-[350px]">
        <h1 className="text-[24px] text-[#181A2A]">All Blog Post</h1>
        <div className="flex justify-between">
          <div className="text-[#495057] text-[12px] flex gap-[20px]">
            <p className="text-[#D4A373]">All</p>
            <p>Design</p>
            <p>Travel</p>
            <p>Fashion</p>
            <p>Technology</p>
            <p>Branding</p>
          </div>
          <p className="text-[#495057] text-[12px] flex gap-[20px]">View All</p>
        </div>
        {Data2.map((e) => {
          return (
            <div className="flex gap-[20px]">
              <div className="gap-[16px] flex flex-col border px-[16px] py-[16px] rounded-xl ">
                <img className="w-[360px] h-[240px]" src={e.url} alt="" />
                <div>
                  <button className="px-[10px] py-[4px] bg-indigo-100 rounded-[6px] text-[#4B6BFB]">
                    {e.buttn}
                  </button>
                </div>
                <div className="gap-[20px] flex flex-col">
                  <h1 className="text-[24px] text-[#181A2A]">{e.content}</h1>
                  <p className="text-[#97989F]">{e.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
