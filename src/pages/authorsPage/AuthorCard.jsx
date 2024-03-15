import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthorsQuotes } from "../../store/authorsQuotesSlice";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { GoDash } from "react-icons/go";
import { FaCopy, FaTwitter } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import {
  handelOnClickCopyText,
  handelOnClickMic,
  handleOnClickTwitter,
} from "../homePage";

function AuthorCard() {
  const { authorsQuotesStore, loding, page, totalPage } = useSelector(
    (state) => state.authorQuotes
  );
  console.log("the page no : ", page);
  console.log("the total page is  : ", totalPage);
  console.log("the loding is : ", loding);
  console.log("the data is  : ", authorsQuotesStore);

  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchAuthorsQuotes({ authorName: id, pageno: 1 }));
  }, []);

  const handleInfiniteScroll = () => {
    if (!loding && page < totalPage) {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop + 1;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight) {
        dispatch(fetchAuthorsQuotes({ authorName: id, pageno: page + 1 }));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page, totalPage]);

  return (
    <div className="md:columns-2 gap-10  px-10 py-10">
      {authorsQuotesStore?.map((item) => (
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
  );
}

export default AuthorCard;
