import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Cards from "@/components/Trend";
import Blog from "@/components/Blog";
import Foot from "@/components/Footer";
import Cras from "@/components/Crausel";
import Miss from "@/components/Error";
import axios from "axios";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const api = axios.get("https://dev.to/api/articles?username=gereltuyamz");


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articleData, setArticleData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredArticleData, setFilteredArticleData] = useState([]);
  const [articleCount, setArticleCount] = useState(3);
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const viewAll = () => {
    router.push("/blogList");
  };
  const Contact = ()=>{
    router.push("/Contact")
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await api;
      setArticleData(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredArticleData(articleData);
    setCategories([...new Set(articleData.map((item) => item.tags))]);
  }, [articleData]);

  const filterByCategory = (itemData, category) => {
    if (category && category == "all") {
      setFilteredArticleData(articleData);
      return;
    }
    const filterData = articleData.filter((item) => item.tags == itemData);
    setFilteredArticleData(filterData);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? articleData.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === articleData.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="  justify-center flex-col gap-[100px] flex w-[100%]">
      <Navbar />
      {articleData.length !== 0 && (
            <Cras
              activeIndex={index}
              image={articleData[index].social_image}
              tags={articleData[index].tags}
              desc={articleData[index].title}
              date={articleData[index].readable_publish_date}
            />
          )}
          <div className="flex justify-end ">
            <button
              onClick={prevSlide}
              className="rounded-[6px] border-[1px] p-[10px]"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="rounded-[6px] border-[1px] p-[10px]"
            >
              {">"}
            </button>
          </div>
      <Blog />
      <Foot />
    </section>
  );
}
