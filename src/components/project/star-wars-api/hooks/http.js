import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("sending http request", url);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setFetchData(data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [...dependencies, url]);

  return [isLoading, fetchData];
};
