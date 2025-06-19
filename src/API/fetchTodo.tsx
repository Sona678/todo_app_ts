import axios from "axios";

interface typeA {
  name: string;
}

export default async function fetchTodo() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const typedData = data as object;
    const randomIndex = Math.floor(Math.random() * data.length);
    const selected = data[randomIndex];
    return {
      id: selected.id,
      text: selected.title,
      userId: selected.userId,
    }; // eauta matra
  } catch (error: any) {
    console.error("API fetch failed:", error);
    return null;
  }
}
