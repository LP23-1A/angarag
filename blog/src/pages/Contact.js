import Navbar from "@/components/Navbar";
import Foot from "@/components/Footer";
import Cont from "@/components/Conn";

export default function Us() {
  return (
    <div className="justify-center flex-col gap-[100px] flex w-[100%]">
      <Navbar />
      <div className=" flex flex-col items-center justify-center px-[350px]">
        <Cont/>
      </div>
      <Foot />
    </div>
  );
}
