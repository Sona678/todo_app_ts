import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className=" flex justify-center  items-center flex-col gap-3 pt-3 text-center">
          <header className="text-2xl font-bold text-center">
            <div className="flex justify-center items-center gap-10">
              <h2 className=" text-teal-400">Hello, Welcome to the Todo app</h2>
            </div>
          </header>

          <div className="container text-black">
            <RouterProvider router={router} />
          </div>

          <footer className="text-center text-sm text-cyan-400">
            Footer of app
          </footer>
        </main>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;
