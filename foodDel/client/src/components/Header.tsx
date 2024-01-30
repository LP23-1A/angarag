import {Pinecone} from "./Logo";
import Button from '@mui/material/Button';

export default function HeaderLogin() {
  return (
    <div className="flex justify-between items-start">
      <div className="flex justify-center items-center gap-[24px]">
        <Pinecone />
        <div className="flex justify-center items-center">
          <button className="text-[#000] text-[14px] px-[16px] py-[8px]">НҮҮР</button>
          <button className="text-[#000] text-[14px] px-[16px] py-[8px]">ХООЛНЫ ЦЭС</button>
          <button className="text-[#000] text-[14px] px-[16px] py-[8px]">ХҮРГЭЛТИЙН БҮС</button>
        </div>
      </div>
      <div>
        <input type="text"  />
        <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </div>
    </div>
  );
}
