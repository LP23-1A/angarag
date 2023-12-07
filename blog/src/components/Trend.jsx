export default function Cards() {
  return (
    <div className="flex flex-col gap-[30px] px-[350px]">
      <h1 className="text-[24px] text-[#181A2A]">Trending</h1>
      <div>
        <div className="absolute">
          <img
            className=" rounded-xl bg-[#14162466] w-[290px] h-[320px]"
            src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="relative">
          <button className="px-[10px] py-[4px] bg-indigo-100 rounded-[6px] text-[#4B6BFB]">
            Technology
          </button>
          <h1 className="text-[18px] text-[#181A2A]">
            The Impact of Technology on <br /> the Workplace: How <br />{" "}
            Technology is Changing
          </h1>
        </div>
      </div>
    </div>
  );
}
