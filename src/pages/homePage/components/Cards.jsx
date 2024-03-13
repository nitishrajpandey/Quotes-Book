import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GoDash } from "react-icons/go";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaCopy } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { fetchRandomQuotes } from "../../../store/randomQuotesSlice";
import {
  handelOnClickCopyText,
  handelOnClickMic,
  handleOnClickTwitter,
} from "..";

function Cards() {
  const data = useSelector((state) => state.randomQuotes.quotesData);
  const loding = useSelector((state) => state.randomQuotes.lodingStatus);
  console.log(data);
  const dispatch = useDispatch();

  const handelGenerateQuotes = () => {
    dispatch(fetchRandomQuotes());
  };
  return (
    <>
      {data.map((item) => (
        <div
          className=" max-w-[600px] min-w-[350px] px-4 py-5 rounded-2xl bg-[#F0F0F0] shadow-md shadow-black"
          key={item._id}
        >
          <div>
            <h1 className="text-center font-bold text-2xl font-mono py-1">
              Quote of the Day
            </h1>
            <p className=" text-center py-4">
              <RiDoubleQuotesL className="inline" />
              <span className="px-3">{item.content}</span>
              <RiDoubleQuotesR className="inline " />
            </p>
            <h3 className="text-right pb-3 font-semibold">
              <GoDash className="inline" /> {item.author}
            </h3>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center">
            <div className="flex gap-3 ">
              <button
                className="border border-[#5271E9]  rounded-full p-2 cursor-pointer active:bg-slate-400 "
                onClick={() => handelOnClickMic(item.content)}
              >
                <HiSpeakerWave className="text-[#5271E9]" />
              </button>
              <button
                className="border border-[#5271E9]  rounded-full p-2 cursor-pointer active:bg-slate-400"
                onClick={() => handelOnClickCopyText(item.content)}
              >
                <FaCopy className="text-[#5271E9]" />
              </button>
              <button
                className="border border-[#5271E9] rounded-full p-2 cursor-pointer active:bg-slate-400"
                onClick={() => handleOnClickTwitter(item.content)}
              >
                <FaTwitter className="text-[#5271E9]" />
              </button>
            </div>
            <div>
              <button
                className="px-4 py-2 text-white rounded-2xl bg-[#5271E9] font-semibold"
                onClick={handelGenerateQuotes}
              >
                {loding ? <h1>Loding..</h1> : <h1> New Quotes</h1>}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
