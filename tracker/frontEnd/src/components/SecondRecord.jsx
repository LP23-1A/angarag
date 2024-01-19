import AddRecord from "./RecordToday";

export default function Two(props) {
  let data = props.data;
  console.log(data);
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
          {data && data.map((el)=>{
            return (
              <div className="px-[24px] py-[12px] border border-[#E5E7EB] bg-[#FFF] rounded-xl flex justify-between items-center">
            <div className="flex gap-[16px] items-center">
              <input type="checkbox" className="checkbox checkbox-md" />
              <div className="w-[40px] h-[40px] bg-[#0166FF] flex justify-center items-center rounded-[50%]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#000] text-[16px]">{el.name}</p>
                <p className="text-[12px] text-[#6B7280]">{el.time}</p>
              </div>
            </div>
            <p className="text-[#94A3B8]">{el.expense}</p>
          </div>
            );
          })}
        <AddRecord/>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1 className="text-[#000000] text-[16px]">Yesterday</h1>
        <AddRecord />
      </div>
    </div>
  );
}
