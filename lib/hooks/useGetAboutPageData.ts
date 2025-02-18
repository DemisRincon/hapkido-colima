import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAboutPage,
  setErrorAboutPage,
  setLoadingAboutPage,
} from "../redux/aboutReducer";

const useGetAboutPageData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        dispatch(setLoadingAboutPage());
        const res = await fetch("/api/confluence/about", {
          signal: abortController.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const jsonData = await res.json();
        dispatch(setAboutPage(jsonData));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          dispatch(setErrorAboutPage(err as Error));
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);
};

export default useGetAboutPageData;
