import axios from "axios";
import { useState } from "react";
const api = "http://localhost:8001/category/adddata";
export default function Modal() {

  const handler = async () => {
    try {
      let res = await axios.post(api, { name });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box gap-[32px] flex flex-col">
        <div className="flex flex-col gap-2">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg border-b p-[5px]">Add Category</h3>
        </div>
        <div className="gap-[8px] flex items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button
          className="btn btn-wide bg-[#16A34A] text-[#F9FAFB] "
          onClick={handler}>
          Add
        </button>
      </div>
    </dialog>
  );
}
