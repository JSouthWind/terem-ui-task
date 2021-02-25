import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
  }, [url]);
  return { data, loading, error };
}
