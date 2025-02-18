import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setContactPage,
  setErrorContactPage,
  setLoadingContactPage,
} from "../redux/contactReducer";

const useGetContactPageData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        dispatch(setLoadingContactPage());
        const res = await fetch("/api/confluence/contact", {
          signal: abortController.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const jsonData = await res.json();
        dispatch(setContactPage(jsonData));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          dispatch(setErrorContactPage(err as Error));
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);
};

export default useGetContactPageData;
