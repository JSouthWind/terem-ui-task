import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, [url]);
  return { data, loading, error };
}
