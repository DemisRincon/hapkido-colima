import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../methods/fetch";
import { setPage } from "@/redux/pageReducer";

const useGetHomePage = (query: string) => {
  const [data, setData] = useState<{ [key: string]: unknown }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(query)
      .then((res) => res.json())
      .then((res) => {
        let HomeData: { [key: string]: Record<string, unknown> } = {};
        res.data.pageCollection.items[0].componentsCollection.items.forEach(
          (item: { [x: string]: unknown; __typename: string }) => {
            const { __typename, ...rest } = item;
            HomeData[__typename] = rest;
          }
        );

        dispatch(setPage(HomeData));
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

export default useGetHomePage;
