import Dashboard from "@/app/dashboard/page"

export default function Head() {
    return(
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
          onClick={() => router.push("")}
          className="text-[#0F172A] text-[16px]"
        >
          Dashboard
        </button>
        <button className="text-[#0F172A] text-[16px]">Records</button>
      </div>
      <div className="flex gap-[24px] justify-center items-center">
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="text-[16px] text-[#FFFFFF] bg-[#0166FF] p-[12px] rounded-[20px] h-[32px] flex justify-center items-center"
        >
          + Record
        </button>
        <div className="avatar">
          <div className="w-[40px] h-[40px] rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
    )
}