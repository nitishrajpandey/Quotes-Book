import React, { useEffect } from "react";
import { FaCopy, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  handelOnClickCopyText,
  handelOnClickMic,
  handleOnClickTwitter,
} from "../homePage";
import { HiSpeakerWave } from "react-icons/hi2";
import { GoDash } from "react-icons/go";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { fetchTagsCards } from "../../store/tagsCardSlice";
import { useParams } from "react-router-dom";

function CardDetails() {
  const data = useSelector((state) => state.tagsCard.tagsCardStore);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(fetchTagsCards(id));
  }, []);
  return (
    <>
      <div className="md:columns-2 gap-10  px-10 py-10">
        {data?.results?.map((item) => (
          <div
            className=" px-4 py-5 rounded-2xl bg-[#F0F0F0] shadow-md shadow-black overflow-hidden mb-10"
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
            <div className="flex justify-center items-center">
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardDetails;
