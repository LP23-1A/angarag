export default function ReModal() {
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form
            method="dialog"
            className="flex justify-between items-center border-b pb-[20px]"
          >
            {/* if there is a button in form, it will close the modal */}
            <h1 className="text-[#0F172A] text-[20px]">Add Record</h1>
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
          <div className="flex">
            <div className="px-[24px] py-[20px] p-[20px]">
              <div class="join grid grid-cols-2">
                <button class="join-item btn btn-outline">Expense</button>
                <button class="join-item btn btn-outline">Income</button>
              </div>
              <div className="p-[24px]">
                <textarea
                  placeholder="Amount"
                  className="textarea textarea-bordered textarea-sm w-full max-w-xs border-[#D1D5DB] "
                ></textarea>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <select className="select select-bordered">
                    <option>
                      Pick one
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="p-[24px]">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Payee</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
              </label>
              
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
