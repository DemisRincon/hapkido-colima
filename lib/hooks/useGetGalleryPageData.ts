import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setErrorGalleryPage,
  setGalleryPage,
  setLoadingGalleryPage,
} from "../redux/galleryReducer";

const useGetGalleryPageData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        dispatch(setLoadingGalleryPage());
        const res = await fetch("/api/confluence/gallery", {
          signal: abortController.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const jsonData = await res.json();
        dispatch(setGalleryPage(jsonData));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          dispatch(setErrorGalleryPage(err as Error));
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);
};

export default useGetGalleryPageData;
