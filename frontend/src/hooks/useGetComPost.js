import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetComPost = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        console.log("Fetching data...");
        const res = await fetch("http://localhost:5000/api/compost/getAllPost");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Data fetched:", data);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    getConversations();
  }, []);
  

  return { conversations, loading };
};

export default useGetComPost;
