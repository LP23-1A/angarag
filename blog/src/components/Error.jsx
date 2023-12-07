export default function Miss() {
  return (
    <div className="flex justify-center items-center px-[350px]">
      <div className="text-[72px] pr-[40px]">404</div>
      <div className="gap-[20px] flex flex-col border-l-[1px] pl-[40px]">
        <h1>Page Not Found</h1>
        <p className="text-[#696A75]">
          We're sorry, This page is unknown or does <br /> not exist the page
          you are looking for.
        </p>
        <div>
          <button className="px-[16px] text-[#FFFFFF] text-[14px] py-[10px] bg-[#4B6BFB] rounded-[6px] ">
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}
