
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Link, RouterProvider } from 'react-router-dom';
import router from './router';

const queryClient=new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <h1 className='flex justify-center text-2xl bg-center font-bold'>welcome home</h1>
      <RouterProvider router={router}/>
    <ReactQueryDevtools/>
    </QueryClientProvider>
    </>
  );
}

export default App;
