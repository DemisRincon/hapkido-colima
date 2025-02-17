import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setError, setNavigator } from "../redux/navigatorReducer";

const useGetNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        dispatch(setLoading());
        const res = await fetch("/api/navigator", {
          signal: abortController.signal,
        });
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const jsonData = await res.json();

        dispatch(setNavigator(jsonData));
      } catch (err) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          dispatch(setError(err as Error));
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [dispatch]);
};

export default useGetNavigation;
