
import { useEffect, useState } from 'react';

export const useGetFetchApi = <T extends Record<string, any>>(params: string) => {
    const [data, setData] = useState<T | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>();
  
    const getData = async () => {
      try {
        const res = await fetch(params);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return {
      data,
      isLoading,
      error,
    };
  };
