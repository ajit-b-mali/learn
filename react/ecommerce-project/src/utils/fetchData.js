import axios from "axios";

export default async function fetchData(setData, url) {
  try {
    const response = await axios.get(url);
    setTimeout(() => {
        setData(response.data);
    }, 500); // Simulate network delay
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
};