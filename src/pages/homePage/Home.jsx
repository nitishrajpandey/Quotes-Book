import React, { useEffect } from "react";
import Cards from "./components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuotes } from "../../store/randomQuotesSlice";
import Loding from "../../components/Loding/Loding";

function Home() {
  const dispatch = useDispatch();
  const loding = useSelector((state) => state.randomQuotes.lodingStatus);

  useEffect(() => {
    dispatch(fetchRandomQuotes());
  }, []);

  if (loding) {
    return <Loding />;
  }
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)] px-4 sm:px-0">
      <Cards />
    </div>
  );
}

export default Home;
