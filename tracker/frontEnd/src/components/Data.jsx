"use client";
import axios from "axios";
import { useState , useEffect } from "react";
const api = "http://localhost:8001/category/adddata";

export default function Cate() {

  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(true);
  const loadCategory = async () => {
    const res = await axios.post("http://localhost:8001/category/getdata");
    setCategory(res.data);
  };
  useEffect(() => {
    loadCategory();
  }, []);
  const handler = async () => {
    try {
      let res = await axios.post(api, { name: newCategory });
      setCategory([...category, res.data]);
      setNewCategory("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>  
          <div className=" bg-slate-600 ">
                  <div className="gap-[8px] flex items-center">
                  <input
                    value={newCategory}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(event) => setNewCategory(event.target.value)}
                  />
                </div>
                <button
                  className="btn btn-wide bg-[#16A34A] text-[#F9FAFB] "
                  onClick={handler}
                >
                  Add
                </button>
                </div>
      {category &&
        category.map((category) => {
          return (
            <div className="flex justify-between items-center">
              <div className="flex gap-[8px] pl-[12px] justify-center items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                    fill="#94A3B8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.664255 10.5904C0.517392 10.2087 0.517518 9.78563 0.66461 9.40408C2.10878 5.65788 5.7433 3 9.99859 3C14.256 3 17.892 5.66051 19.3347 9.40962C19.4816 9.79127 19.4814 10.2144 19.3344 10.5959C17.8902 14.3421 14.2557 17 10.0004 17C5.74298 17 2.10698 14.3395 0.664255 10.5904ZM14.0004 10C14.0004 12.2091 12.2095 14 10.0004 14C7.79123 14 6.00037 12.2091 6.00037 10C6.00037 7.79086 7.79123 6 10.0004 6C12.2095 6 14.0004 7.79086 14.0004 10Z"
                    fill="#94A3B8"
                  />
                </svg>
                <p className="text-[16px]">{category.name}</p>
              </div>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9167 10.5833L9.75004 12.7499C9.48615 13.0138 9.18407 13.0729 8.84379 12.927C8.50351 12.7812 8.33337 12.5208 8.33337 12.1458V7.85411C8.33337 7.47911 8.50351 7.21869 8.84379 7.07286C9.18407 6.92702 9.48615 6.98605 9.75004 7.24994L11.9167 9.41661C12 9.49994 12.0625 9.59022 12.1042 9.68744C12.1459 9.78466 12.1667 9.88883 12.1667 9.99994C12.1667 10.1111 12.1459 10.2152 12.1042 10.3124C12.0625 10.4097 12 10.4999 11.9167 10.5833Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </button>
          
    
            </div>
          );
        })}
    </>
  );
}
{/* <div className="gap-[8px] flex items-center">
<input
  value={name}
  type="text"
  placeholder="Type here"
  className="input input-bordered w-full max-w-xs"
  onChange={(event) => setName(event.target.value)}
/>
</div>
<button
className="btn btn-wide bg-[#16A34A] text-[#F9FAFB] "
onClick={handler}
>
Add
</button> */}
