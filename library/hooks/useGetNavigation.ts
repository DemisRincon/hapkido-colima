import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavigator } from "../../redux/navigatorReducer";
import fetchData from "../methods/fetch";

const useGetNavigation = (query: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(query)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setNavigator(res.data.navbarCollection.items[0]));
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [query, dispatch]);

  return { data, loading, error };
};

export default useGetNavigation;
