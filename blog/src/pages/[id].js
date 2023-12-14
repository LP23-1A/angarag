import Navbar from "@/components/Navbar";
import Foot from "@/components/Footer";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

export default function SingleP() {
  const [postData, setPostData] = useState({});
  const router = useRouter();
  const fetchPost = async () => {
    const response = await axios.get(
      "https://dev.to/api/articles" + "/" + router.query.id
    );
    setPostData(response.data);
  };
  useEffect(() => {
    if (router.isReady) {
      fetchPost();
    }
  }, [router.isReady]);
  return (
    <div>
      <Navbar />
      <div>{<img src={postData.social_image} /> || <Skeleton />}</div>
      <div>{postData.title || <Skeleton />}</div>
      <div>{postData.user?.name}</div>
      <div>{postData.readable_publish_date || <Skeleton />}</div>
      <div>{postData.description || <Skeleton />}</div>
      <div>{postData.body_markdown || <Skeleton />}</div>
      <Foot />
    </div>
  );
}
