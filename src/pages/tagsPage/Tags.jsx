import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagsCollection } from "../../store/tagsSlice";
import { NavLink } from "react-router-dom";
import { addcardName, fetchTagsCards } from "../../store/tagsCardSlice";
import Loding from "../../components/Loding/Loding";

function Tags() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tags.tagsCollection);
  const loding = useSelector((state) => state.tags.lodingStatus);
  console.log(data);
  useEffect(() => {
    dispatch(fetchTagsCollection());
  }, []);

  const handelonclick = (inputdata) => {
    dispatch(addcardName(inputdata));
  };
  if (loding) {
    return <Loding />;
  }
  return (
    <div className="py-10 px-4 sm:px-10">
      {/* <h1 className="text-center py-10 text-4xl capitalize font-bold">tags</h1> */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 ">
        {data.map((item) => (
          <div
            key={item._id}
            className=" p-4  flex flex-col gap-5 mb-10 overflow-hidden bg-[#F0F0F0] rounded-2xl shadow-md shadow-black"
          >
            <h1 className="text-center py-2 font-semibold text-xl font-serif italic">
              {item.name}
            </h1>
            <p className="capitalize">
              {" "}
              Quotes Count :{" "}
              <span className="font-bold">{item.quoteCount}</span>
            </p>
            <p>Date Added : {item.dateAdded}</p>
            <div className="flex justify-center">
              <NavLink to={`cards/${item.name}`}>
                <button
                  className="bg-green-800 text-white rounded-xl italic py-2 font-semibold shadow-md shadow-black w-fit px-6 flex self-center mt-5"
                  onClick={() => handelonclick(item.name)}
                >
                  Click me
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tags;
