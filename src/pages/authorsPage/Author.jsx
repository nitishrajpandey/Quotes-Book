// Author.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { fetchAuthorCollection } from "../../store/authorSlice";
import { Link, NavLink } from "react-router-dom";
import { authorName } from "../../store/authorsQuotesSlice";
import Loding from "../../components/Loding/Loding";

function Author() {
  const { authorCollection, pageNo, totalPage, loading } = useSelector(
    (state) => state.authors
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthorCollection(1)); // Fetch initial data with page number 1
  }, [dispatch]);

  const handleInfiniteScroll = () => {
    if (!loading && pageNo < totalPage) {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop + 1;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight) {
        dispatch(fetchAuthorCollection(pageNo + 1));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [pageNo, totalPage]);

  const handelOnclickQuotes = (inputAuthorName) => {
    dispatch(authorName(inputAuthorName));
  };

  return (
    <div className="py-20 px-10">
      <div className="columns-1 lg:columns-2 gap-7">
        {authorCollection.map((item) => (
          <div
            key={item._id}
            className="p-4 min-w-[300px] flex flex-col mb-8 overflow-hidden gap-2 bg-[#F0F0F0] rounded-2xl shadow-lg shadow-black"
          >
            <h1 className="text-center py-2 font-bold text-xl">{item.name}</h1>
            <h3 className="text-center italic font-semibold">
              {item.description}
            </h3>
            <p className="text-center py-4">
              <RiDoubleQuotesL className="inline" />
              <span className="px-3">{item.bio}</span>
              <RiDoubleQuotesR className="inline " />
            </p>
            <p className="capitalize">
              Quotes Count: <span className="font-bold">{item.quoteCount}</span>
            </p>
            <p>Date Added: {item.dateAdded}</p>
            <div className="flex justify-center py-2 gap-8">
              <Link to={item.link} target="_blank">
                <button className="px-4 py-2 bg-blue-800 text-white rounded-xl">
                  Wikipedia
                </button>
              </Link>
              <NavLink to={`cards/${item.name}/${pageNo}`}>
                <button
                  className="px-4 py-2 bg-green-800 text-white rounded-xl"
                  onClick={() => handelOnclickQuotes(item.name)}
                >
                  View Quotes
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      {loading && <Loding />}
    </div>
  );
}

export default Author;
