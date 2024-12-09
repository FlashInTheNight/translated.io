import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </QueryClientProvider>
  );
}
