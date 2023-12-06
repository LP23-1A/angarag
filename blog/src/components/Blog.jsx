export default function Blog() {
  return <div className="flex flex-col gap-[32px] px-[350px]">
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
   <div className="flex gap-[20px]">
    <div className="gap-[16px] flex flex-col border px-[16px] py-[16px] rounded-xl ">
      <img className="w-[360px] h-[240px]" src="https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1702857600&Signature=GtIcIcyrku03di6uhi0mfVSqHwIdIsUNoUQebv4ln3q84G9ZINAh~g63In7v1hCCoAUoAP2aTUyCsm0UHjL-VzZqeJwqljXEBvlG38XfWgPV0jOZS41GSMMySeIgQ-5a6beEdkq3-nVqA8DtYQ5tFNSBjsKIZZlJohL6yXlNmptCXdFuApfCK6nWzmbfiNgeW-g3FK0QgNJNPlJaJFhYBW7ic31MDvl416i18XVjJb3BD8ahSb1F7OqOffjqQOGVpbAL4r4vPSLE8tV4YbaMpt1sknJsMh0hxR4lDqQ0txf88uFFFPq7xf9FpZyaEIntEtG8EVMtjjmahArIWExyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      <div>
      <button className="px-[10px] py-[4px] bg-indigo-100 rounded-[6px] text-[#4B6BFB]">Technology</button>
      </div>
      <div className="gap-[20px] flex flex-col">
        <h1 className="text-[24px] text-[#181A2A]">The Impact of Technology on <br /> the Workplace: How <br /> Technology is Changing</h1>
        <p className="text-[#97989F]">August 20, 2022</p>
      </div>
    </div>
   </div>
  </div>;
}
