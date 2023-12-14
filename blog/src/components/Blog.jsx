import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const api = "https://dev.to/api/articles";

export default function Blog() {
  const [data, setData] = useState([]);
  const valueRef = useRef("");
  const initData = useRef([]);
  const router = useRouter();

  const getData = async (api) => {
    let res = await axios.get(api);
    initData.current = res.data;
    setData(res.data);
  };

  const reset = () => setData(initData.current);

  const filter = (name) =>
    setData(() => initData.current.filter((el) => el.tags === name));

  const [Count, setCount] = useState(6);

  const handler = () => {
    setCount((prev) => prev + 3);
  };

  const handlerRouter = (id) => router.push(`id=${id}`);
  useEffect(() => {
    getData(api);
  }, []);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-[32px] px-[350px]">
          <h1 className="text-[24px] text-[#181A2A]">All Blog Post</h1>
          <div className="flex justify-between">
            <div className="text-[#030404] text-[12px] flex gap-[20px]">
              <button onClick={reset} className="text-[#D4A373]">
                All
              </button>
              <button onClick={() => filter("webdev")}>webdev</button>
              <button onClick={() => filter("nextjs")}>Nextjs</button>
              <button onClick={() => filter("programming")}>Programming</button>
              <button onClick={() => filter("Technology")}>Technology</button>
              <button onClick={() => filter("Branding")}>Branding</button>
            </div>
            <button
              onClick={reset}
              className="text-[#495057] text-[12px] flex gap-[20px]"
            >
              View All
            </button>
          </div>
          {data &&
            data.slice(0, 6).map((item) => {
              return (
                <Link
                  href={`/${item.id}`}
                  className="flex gap-[20px] flex-wrap justify-center"
                >
                  <div className="flex gap-[20px] w-[392px]">
                    <div className="gap-[16px] flex flex-col border px-[16px] py-[16px] rounded-xl ">
                      <img
                        className="w-[360px] h-[240px]"
                        src={item.social_image}
                        alt=""
                      />
                      <div>
                        <button className="px-[10px] py-[4px] bg-indigo-100 rounded-[6px] text-[#4B6BFB]">
                          {item.tag_list}
                        </button>
                      </div>
                      <div className="gap-[20px] flex flex-col">
                        <h1 className="text-[24px] text-[#181A2A]">
                          {item.description}
                        </h1>
                        <p className="text-[#97989F]">
                          {item.readable_publish_date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

          <button onClick={handler}>Load more</button>
        </div>
      </div>
    </>
  );
}
