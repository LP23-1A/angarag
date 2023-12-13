import { Carsoul } from "./CrauselData";

export default function Cras() {
  return (
    <div className="flex flex-col w-fit items-center justify-center mx-[350px] relative h-[600px]">
      <img
        className="relative h-[600px] w-[1216px] rounded-xl"
        src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1703462400&Signature=ehznjTJQeZ3Mdl43ywbZ0~shsawOLC0vFChbFJW5hDONnlaLhm98kb86CLdqChpFxX78oyHV~zpVBnp8A~V4cosmfPYlHzFZnNa5L9Q1VytJPn1DUyNAFeTqZoUgdj3oMHz8cFgPZ~MrpaPoVYfwTRBwD6MwW1kQea3Jhu3Hn~hbYuAqvKQB1TymDORbvqaADQXeEC5IUB7OvG2Sgx5xJgURsgmjDPzHKEJGDOeXofDIiaFJ9qNv508zXl0nIZwIsOHsYdvx2DVJ8FsEk1umu2NkOh16NCP0uvp5RmD2YugglEIu~NZqijsIr-SxyxuL8DWDlBQxNfSy6CWZo-1I4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <div className="flex absolute left-[10px] top-[350px]">
        <div className="bg-[#FFF] gap-[24px] flex flex-col p-[40px] rounded-xl ">
          <div>
            <button className="px-[10px] py-[4px] bg-[#4B6BFB] rounded-[6px] text-[#FFFFFF]">
              ttt
            </button>
          </div>
          <div className="gap-[20px] flex flex-col">
            <h1 className="text-[36px] text-[#181A2A]">desc</h1>
            <p className="text-[#97989F] text-[16px]">date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
