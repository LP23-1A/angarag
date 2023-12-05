// export default function Trending() {
//   return <section>

//   </section>;
// }

const Data = [
  {
    btn: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

export default function Cards() {
  return (
    <>
      {Data.map((el, index) => {
        return (
          <div
            key={index}
            className="card--container bg-[url(https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]"
          >
            <div>{el.btn}</div>
            <p className="date ts">{el.content}</p>
          </div>
        );
      })}
    </>
  );
}
