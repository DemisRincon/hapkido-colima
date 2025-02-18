import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setErrorHomePage,
  setHomePage,
  setLoadingHomePage,
} from "../redux/homeReducer";
import {
  setAboutPage,
  setErrorAboutPage,
  setLoadingAboutPage,
} from "../redux/aboutReducer";
import {
  setErrorLocation,
  setLoadingLocation,
  setLocationPage,
} from "../redux/locationReducer";
import {
  setErrorGalleryPage,
  setGalleryPage,
  setLoadingGalleryPage,
} from "../redux/galleryReducer";
import {
  setContactPage,
  setErrorContactPage,
  setLoadingContactPage,
} from "../redux/contactReducer";

enum PagesUrls {
  HOME = "/api/confluence?page=home",
  ABOUT = "/api/confluence?page=about",
  LOCATION = "/api/confluence?page=location",
  GALLERY = "/api/confluence?page=gallery",
  CONTACT = "/api/confluence?page=contact",
}

export enum Pages {
  HOME = "home",
  ABOUT = "about",
  LOCATION = "location",
  GALLERY = "gallery",
  CONTACT = "contact",
}

const pageData = {
  home: {
    setPage: setHomePage,
    setLoading: setLoadingHomePage,
    setError: setErrorHomePage,
    url: PagesUrls.HOME,
  },
  about: {
    setPage: setAboutPage,
    setLoading: setLoadingAboutPage,
    setError: setErrorAboutPage,
    url: PagesUrls.ABOUT,
  },
  location: {
    setPage: setLocationPage,
    setLoading: setLoadingLocation,
    setError: setErrorLocation,
    url: PagesUrls.LOCATION,
  },
  gallery: {
    setPage: setGalleryPage,
    setLoading: setLoadingGalleryPage,
    setError: setErrorGalleryPage,
    url: PagesUrls.GALLERY,
  },
  contact: {
    setPage: setContactPage,
    setLoading: setLoadingContactPage,
    setError: setErrorContactPage,
    url: PagesUrls.CONTACT,
  },
};

const useGetPageData = (page: Pages) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        dispatch(pageData[page].setLoading());
        const res = await fetch(pageData[page].url, {
          signal: abortController.signal,
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const jsonData = await res.json();
        dispatch(pageData[page].setPage(jsonData));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          dispatch(pageData[page].setError(err as Error));
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [dispatch, page]);
};

export default useGetPageData;
