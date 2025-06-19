
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Todo from './components/Todo';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient=new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
   <div className="min-h-screen bg-gray-200 flex justify-center items-start gap-10 p-10">
      <Todo />
    </div>
    <ReactQueryDevtools/>
    </QueryClientProvider>
    </>
  );
}

export default App;
