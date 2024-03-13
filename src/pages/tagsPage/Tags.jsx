import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagsCollection } from "../../store/tagsSlice";

function Tags() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tags.tagsCollection);
  console.log(data);
  useEffect(() => {
    dispatch(fetchTagsCollection());
  }, []);

  return (
    <div className="py-20 px-10">
      <div className="flex flex-wrap gap-10 justify-around">
        {data.map((item) => (
          <div
            key={item._id}
            className=" p-4 min-w-[300px] flex flex-col gap-1 bg-[#F0F0F0] rounded-2xl shadow-lg shadow-black"
          >
            <h1 className="text-center py-2 font-semibold text-xl">
              {item.name}
            </h1>
            <p className="capitalize">
              {" "}
              Quotes Count :{" "}
              <span className="font-bold">{item.quoteCount}</span>
            </p>
            <p>Date Added : {item.dateAdded}</p>
            <button className="bg-green-800 text-white rounded-2xl py-2 font-semibold shadow-md shadow-black w-fit px-4 flex self-center mt-5">
              Click me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tags;
