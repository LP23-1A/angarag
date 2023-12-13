import Navbar from "@/components/Navbar";
import Foot from "@/components/Footer";

export default function Us() {
  return (
    <div className="justify-center flex-col gap-[100px] flex w-[100%]">
      <Navbar />
      <div className=" flex flex-col items-center justify-center px-[350px]">
        <div className="gap-[40px] flex flex-col">
          <div className="gap-[20px] flex flex-col pt-[14px] px-[10px]">
            <h1 className="text-[36px] text-[#000]">Contact Us</h1>
            <p className="text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam. Lorem ipsum <br /> dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut{" "}
              <br /> labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="flex gap-[50px]">
              <div className="w-[280px] gap-[10px] flex flex-col p-[16px] border border-[#E8E8EA] rounded-xl">
                <h2 className="text-[24px] text-[#000]">Address</h2>
                <p className="text-[#696A75]">
                  1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
                </p>
              </div>
              <div className="w-[280px] gap-[10px] flex flex-col p-[16px] border border-[#E8E8EA] rounded-xl ">
                <h2 className="text-[24px] text-[#000]">Contact</h2>
                <p className="text-[#696A75]">
                  {" "}
                  313-332-8662 <br /> info@email.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F6F7] rounded-lg">
            <div className="pr-[130px] pt-[29px] pl-[35px] pb-[26px] gap-[24px] flex flex-col">
              <h2 className="text-[#000000] text-[18px]">Leave a Message</h2>
              <div className="gap-[20px] flex flex-col">
                <div className="flex justify-between">
                  <input className=" rounded" type="text" />
                  <input className="rounded " type="text" />
                </div>
                <input type="text" />
                <input type="text" />
              </div>
              <div>
                <button className="bg-[#4B6BFB] py-[10px] px-[16px] text-[#FFFFFF] rounded-md">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}
