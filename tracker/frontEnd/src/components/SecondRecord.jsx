import AddRecord from "./RecordToday";

export default function Two() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex justify-between gap-10">
        <div className="join gap-[16px]">
          <button className="join-item btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7906 5.23017C13.0777 5.52875 13.0684 6.00353 12.7698 6.29063L8.83208 10L12.7698 13.7094C13.0684 13.9965 13.0777 14.4713 12.7906 14.7698C12.5035 15.0684 12.0287 15.0777 11.7302 14.7906L7.23017 10.5406C7.08311 10.3992 7 10.204 7 10C7 9.79599 7.08311 9.60078 7.23017 9.45938L11.7302 5.20938C12.0287 4.92228 12.5035 4.93159 12.7906 5.23017Z"
                fill="#0F172A"
              />
            </svg>
          </button>
          <button className="join-item btn">Last 30 Days</button>
          <button className="join-item btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z"
                fill="#0F172A"
              />
            </svg>
          </button>
        </div>
        <select className="select select-bordered w-[180px] max-w-xs">
          <option>Newest fisrt</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className="px-[24px] py-[12px] border border-[#E5E7EB] bg-[#FFF] rounded-xl flex justify-between">
        <div className="flex gap-[16px]">
          <input type="checkbox" className="checkbox checkbox-md" />
          <p>Select all</p>
        </div>
        <p className="text-[#94A3B8]">-35,500₮</p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1 className="text-[#000000] text-[16px]">Today</h1>
        <AddRecord />
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1 className="text-[#000000] text-[16px]">Yesterday</h1>
        <AddRecord />
      </div>
    </div>
  );
}
