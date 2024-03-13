import React, { useEffect } from "react";
import Cards from "./components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuotes } from "../../store/randomQuotesSlice";
import { infinity } from "ldrs";

function Home() {
  const dispatch = useDispatch();
  const loding = useSelector((state) => state.randomQuotes.lodingStatus);

  useEffect(() => {
    dispatch(fetchRandomQuotes());
  }, []);

  infinity.register();

  if (loding) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)]  ">
        <l-infinity
          size="150"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.3"
          color="black"
        ></l-infinity>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)] ">
      <Cards />
    </div>
  );
}

export default Home;
