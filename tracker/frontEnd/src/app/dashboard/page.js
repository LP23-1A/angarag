'use client'
import Records from "@/components/Records";
import { useRouter } from "next/navigation";

export default function Dashboard() {

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
          <button className="text-[#0F172A] text-[16px]">Dashboard</button>
          <button onClick={()=> router.push("/records")} className="text-[#0F172A] text-[16px]">Records</button>
        </div>
        <div className="flex gap-[24px] justify-center items-center">
          <button className="text-[16px] text-[#FFFFFF] bg-[#0166FF] p-[12px] rounded-[20px] h-[32px] flex justify-center items-center">
            + Record
          </button>
          <div class="avatar">
            <div class="w-[40px] h-[40px] rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="bg-[#F3F4F6] flex flex-col gap-[20px] px-[120px] py-[40px]">
        <div className="flex gap-[23px] justify-between">
          <div className="bg-[#FFF] rounded-[18px] w-[384px] h-[219px]">
            <div className="px-[24px] py-[16px] flex justify-start items-center gap-[8px] border-b-[1px] border-[#E2E8F0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#84CC16" />
              </svg>
              <p className="text-[16px] text-[#0F172A]">Your Income</p>
            </div>
            <div className="px-[24px] pt-[20px] pb-[24px] flex flex-col gap-[16px]">
              <div>
                <h1 className="text-[36px] text-[#000000]">1,200,000₮</h1>
                <p className="text-[18px] text[#71717A]">Your Income Amount</p>
              </div>
              <div className="flex justify-start items-center gap-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z"
                    fill="#84CC16"
                  />
                </svg>
                <p className="text-[18px] text-[#000000]">
                  32% from last month
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] rounded-[18px] w-[384px] h-[219px]">
            <div className="px-[24px] py-[16px] flex justify-start items-center gap-[8px] border-b-[1px] border-[#E2E8F0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#84CC16" />
              </svg>
              <p className="text-[16px] text-[#0F172A]">Your Income</p>
            </div>
            <div className="px-[24px] pt-[20px] pb-[24px] flex flex-col gap-[16px]">
              <div>
                <h1 className="text-[36px] text-[#000000]">1,200,000₮</h1>
                <p className="text-[18px] text[#71717A]">Your Income Amount</p>
              </div>
              <div className="flex justify-start items-center gap-[8px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97981 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43734 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46927 3.74215 8.20656 2.81355 10.0979 2.43734C11.9892 2.06114 13.9496 2.25422 15.7312 2.99218C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7473 14.585 20.7192 17.0634 18.8913 18.8913C17.0634 20.7192 14.585 21.7473 12 21.75ZM15.5306 12.2194C15.461 12.1496 15.3783 12.0943 15.2872 12.0566C15.1962 12.0188 15.0986 11.9994 15 11.9994C14.9014 11.9994 14.8038 12.0188 14.7128 12.0566C14.6217 12.0943 14.539 12.1496 14.4694 12.2194L12.75 13.9397V8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25V13.9397L9.53063 12.2194C9.3899 12.0786 9.19902 11.9996 9 11.9996C8.80098 11.9996 8.61011 12.0786 8.46938 12.2194C8.32864 12.3601 8.24958 12.551 8.24958 12.75C8.24958 12.949 8.32864 13.1399 8.46938 13.2806L11.4694 16.2806C11.539 16.3504 11.6217 16.4057 11.7128 16.4434C11.8038 16.4812 11.9014 16.5006 12 16.5006C12.0986 16.5006 12.1962 16.4812 12.2872 16.4434C12.3783 16.4057 12.461 16.3504 12.5306 16.2806L15.5306 13.2806C15.6004 13.211 15.6557 13.1283 15.6934 13.0372C15.7312 12.9462 15.7506 12.8486 15.7506 12.75C15.7506 12.6514 15.7312 12.5538 15.6934 12.4628C15.6557 12.3717 15.6004 12.289 15.5306 12.2194Z"
                    fill="#84CC16"
                  />
                </svg>
                <p className="text-[18px] text-[#000000]">
                  32% from last month
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] rounded-[18px] w-[384px] h-[219px]">
            <div className="px-[24px] py-[16px] flex justify-start items-center gap-[8px] border-b-[1px] border-[#E2E8F0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#0166FF" />
              </svg>
              <p className="text-[16px] text-[#0F172A]">Total Expenses</p>
            </div>
            <div className="px-[24px] pt-[20px] pb-[24px] flex flex-col gap-[16px]">
              <div>
                <h1 className="text-[36px] text-[#000000]">-1,200,000₮</h1>
                <p className="text-[18px] text[#71717A]">Your Income Amount</p>
              </div>
              <div className="flex justify-start items-center gap-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z"
                    fill="#84CC16"
                  />
                </svg>
                <p className="text-[18px] text-[#000000]">
                  32% from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[24px] w-[540px] h-[188px] bg-[#FFF] rounded-[18px] ">
            <div className="px-[24px] py-[16px] flex justify-start items-center gap-[8px] border-b-[1px] border-[#E2E8F0]">
              <p className="text-[16px]">Income - Expense</p>
            </div>
            <div className="px-24px py-[32px]"></div>
          </div>
          <div className="flex flex-col gap-[24px] w-[540px] h-[188px] bg-[#FFF] rounded-[18px] ">
            <div className="px-[24px] py-[16px] flex justify-between items-center gap-[8px] border-b-[1px] border-[#E2E8F0]">
              <p className="text-[16px]">Income - Expense</p>
              <p>Jun 1 - Nov 30</p>
            </div>
            <div className="px-24px py-[32px]"></div>
          </div>
        </div>
        <div className="rounded-[18px] bg-[#FFF]">
          <div className="px-[24px] py-[16px] flex justify-start items-center gap-[8px] border-b-[1px] border-[#E2E8F0]">
            <p className="text-[16px] text-[#0F172A]">Last Records</p>
          </div>
          <Records />
          <Records />
          <Records />
          <Records />
          <Records />
          <div className="px-[24px]">
            <div className="flex justify-between items-center py-[20px] ">
              <div className="flex gap-[16px] items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#0166FF" />
                  <path
                    d="M27.5 19.0272V26.2499C27.5 26.5814 27.3683 26.8994 27.1339 27.1338C26.8995 27.3682 26.5815 27.4999 26.25 27.4999H23.125C22.7935 27.4999 22.4755 27.3682 22.2411 27.1338C22.0067 26.8994 21.875 26.5814 21.875 26.2499V23.1249C21.875 22.9591 21.8092 22.8002 21.6919 22.6829C21.5747 22.5657 21.4158 22.4999 21.25 22.4999H18.75C18.5842 22.4999 18.4253 22.5657 18.3081 22.6829C18.1908 22.8002 18.125 22.9591 18.125 23.1249V26.2499C18.125 26.5814 17.9933 26.8994 17.7589 27.1338C17.5245 27.3682 17.2065 27.4999 16.875 27.4999H13.75C13.4185 27.4999 13.1005 27.3682 12.8661 27.1338C12.6317 26.8994 12.5 26.5814 12.5 26.2499V19.0272C12.5 18.8542 12.5359 18.6831 12.6054 18.5247C12.6749 18.3663 12.7766 18.224 12.9039 18.1069L19.1539 12.21L19.1625 12.2015C19.3926 11.9922 19.6925 11.8762 20.0035 11.8762C20.3146 11.8762 20.6144 11.9922 20.8445 12.2015C20.8472 12.2045 20.8501 12.2074 20.8531 12.21L27.1031 18.1069C27.2292 18.2246 27.3295 18.3672 27.3978 18.5256C27.4661 18.6839 27.5009 18.8548 27.5 19.0272Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <h2 className="text-[16px]">Lending & Renting</h2>
                  <p className="text-[12px]">3 hours ago</p>
                </div>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[16px] text-[#84CC16]">-</p>
                <p className="text-[16px] text-[#84CC16]">1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
