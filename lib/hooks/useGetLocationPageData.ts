import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setErrorLocation,
  setLoadingLocation,
  setLocationPage,
} from "../redux/locationReducer";

const useGetLocationPageData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        dispatch(setLoadingLocation());
        const res = await fetch("/api/confluence/location", {
          signal: abortController.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const jsonData = await res.json();
        dispatch(setLocationPage(jsonData));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          dispatch(setErrorLocation(err as Error));
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);
};

export default useGetLocationPageData;
