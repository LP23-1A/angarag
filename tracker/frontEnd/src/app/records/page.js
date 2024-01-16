"use client";
import Cate from "@/components/Data";
import { useRouter } from "next/navigation";
import Modal from "@/components/CategoryModal";

export default function Records() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center">
      <div className="w-[1440px]">
        <div className="flex justify-between items-center bg-[#FFF] px-[120px] py-[16px]">
          <div className="flex justify-center items-center gap-[24px]">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8296 9.36772V0.300781H9.56514V9.36772H0.300659V18.6322H9.56514V27.6991H18.8296V18.6322H28.0941V9.36772H18.8296ZM18.8296 18.4347H9.56514V9.56665H18.8296V18.4347Z"
                fill="#0166FF"
              />
            </svg>
            <button
              onClick={() => router.push("/dashboard")}
              className="text-[#0F172A] text-[16px]"
            >
              Dashboard
            </button>
            <button className="text-[#0F172A] text-[16px]">Records</button>
          </div>
          <div className="flex gap-[24px] justify-center items-center">
            <button className="text-[16px] text-[#FFFFFF] bg-[#0166FF] p-[12px] rounded-[20px] h-[32px] flex justify-center items-center">
              + Record
            </button>
            <div className="avatar">
              <div className="w-[40px] h-[40px] rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/* header */}
        <div className="bg-[#F3F4F6] flex flex-col gap-[20px] px-[120px] py-[40px]">
          <div className="flex">
            <div className="bg-[#F9FAFB] py-[24px] px-[16px] rounded-[12px] flex flex-col gap-[24px]">
              <h1 className="text-[24px] text-[#000000]">Records</h1>
              <button className="flex gap-[4px] bg-[#0166FF] text-[16px] justify-center items-center rounded-[20px] text-[#FFFFFF] p-[12px] w-[250px] h-[32px]">
                + Add
              </button>
              <input
                type="text"
                placeholder="Search"
                className="bg-[#F3F4F6] w-[250px] h-[32px] p-[16px] rounded-[8px] border border-[#D1D5DB]"
              />
              <div className="flex flex-col gap-[16px]">
                <h2 className="text-[#1F2937] text-[16px] ">Types</h2>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-start gap-[8px] items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs"
                    />
                    <p className="text-[#1F2937] text-[16px]">All</p>
                  </div>
                  <div className="flex justify-start gap-[8px] items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs"
                    />
                    <p className="text-[#1F2937] text-[16px]">Income</p>
                  </div>
                  <div className="flex justify-start gap-[8px] items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs"
                    />
                    <p className="text-[#1F2937] text-[16px]">Expense</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex justify-between items-center">
                  <h2 className="text-[16px] flex justify-center items-center text-[#1F2937]">
                    Category
                  </h2>
                  <button className="px-[8px] flex justify-center items-center text-[#bec4ce]">
                    Clear
                  </button>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <Cate />
                  <button className="flex items-center gap-[8px] px-[8px]" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z"
                        fill="#0166FF"
                      />
                    </svg>
                    <p className="text-[16px]">Add Category</p>
                  </button>
                  <Modal/>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[#1F2937] text-[16px]">Amount Range</p>
                <div className="flex">
                  <input type="number" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
