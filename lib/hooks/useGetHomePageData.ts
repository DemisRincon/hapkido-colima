import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setErrorHomePage,
  setHomePage,
  setLoadingHomePage,
} from "../redux/homeReducer";

const useGetHomePageData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        dispatch(setLoadingHomePage());
        const res = await fetch("/api/confluence/home", {
          signal: abortController.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const jsonData = await res.json();
        dispatch(setHomePage(jsonData));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          dispatch(setErrorHomePage(err as Error));
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);
};

export default useGetHomePageData;
