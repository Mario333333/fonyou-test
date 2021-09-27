import { useEffect, useState } from "react";
import axios from "../utils/services/intance";
import { AxiosType } from "../utils/ts/functionTypes";

const useAxios: AxiosType = <Type>(
  url: string,
  params: { [key: string]: string } | null
) => {
  const [data, setData] = useState<Type | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        let response;
        if (params !== null) {
          response = await axios.get(url, params);
          setData(response.data);
        } else {
          response = await axios.get(url);
          setData(response.data);
        }
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, [url]);
  return { data, error };
};

export default useAxios;
