import { useEffect, useRef, useState } from "react";
import axios from "axios";
export default function useHackerNewsAPI(initialURL, initialData) {
  const [data, setData] = useState(initialData);

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setURL] = useState(initialURL);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    setURL,
    loading,
    errorMessage,
    data,
  };
}
