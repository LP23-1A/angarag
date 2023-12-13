import Skeleton from "react-loading-skeleton";

export default function Cras(el) {
  const index = 0;
  console.log(el);
  return (
    <div className="flex flex-col w-fit items-center justify-center mx-[350px] relative h-[600px]">
      <div className="relative h-[600px] w-[1216px] rounded-xl" style={{ backgroundImage: `url(${el.image || <Skeleton/>})` }}
        key={el.index}></div>
      <div className="flex absolute left-[10px] top-[350px]">
        <div className="bg-[#FFF] gap-[24px] flex flex-col p-[40px] rounded-xl ">
          <div>
            <button className="px-[10px] py-[4px] bg-[#4B6BFB] rounded-[6px] text-[#FFFFFF]">
            {el.tags || <Skeleton/>}
            </button>
          </div>
          <div className="gap-[20px] flex flex-col">
            <h1 className="text-[36px] text-[#181A2A]">
            {el.desc || <Skeleton/>}
            </h1>
            <p className="text-[#97989F] text-[16px]">
            {el.date || <Skeleton/>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
