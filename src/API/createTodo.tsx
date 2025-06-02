import axios from 'axios';

const createTodo = async (title:any) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: 'bar',
      userId: 1
    }, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });

    return response.data; 
  } catch (error:any) {
    console.error("POST request failed:", error);
    return null;
  }
};

export default createTodo;
