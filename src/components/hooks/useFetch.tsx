import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

const useFetch = (
  url: string,
  config?: AxiosRequestConfig,
  formdata?: string
): [
  (data?: any, rest?: AxiosRequestConfig) => Promise<AxiosResponse<any>>,
  { response: any; loading: boolean; error: AxiosError }
] => {
  const [response, setResponse] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const instance = axios.create({
    baseURL: `https://www.reddit.com/r/`,
  });
  const loadQuery = async (data?: any, rest?: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    const headers = !token
      ? {}
      : {
          Authorization: `Token ${token}`,
          "Content-Type": formdata ? "multipart/form-data" : "application/json",
        };

    return new Promise<AxiosResponse<any>>((resolve, reject) => {
      setLoading(true);
      instance({
        url: `${url}`,
        ...config,
        data,
        headers,
        ...rest,
      })
        .then((response: AxiosResponse) => {
          if (response.status === 200 || response.status === 201) {
            resolve(response);
            setError(undefined);
            response.data != null && setResponse(response.data);
          } else {
            setError(response?.data);
            setResponse(undefined);
          }
          setLoading(false);
        })
        .catch((e: AxiosError) => {
          if (e.response?.status === 401 || e.response?.status === 403) {
          } else if (e.response?.status === 404) {
            setResponse(undefined);
          } else {
            setResponse(undefined);
          }

          setError(e.response?.data);
          setTimeout(() => {
            setLoading(false);
          }, 1);
        });
    });
  };

  return [loadQuery, { response, loading, error }];
};

export default useFetch;
