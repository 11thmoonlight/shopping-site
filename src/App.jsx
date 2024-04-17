import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import Hot from "./pages/Hot";
import New from "./pages/New";
import Payment from "./pages/Payment";
import Plates from "./pages/Plates";
import Success from "./pages/Success";
import Tiles from "./pages/Tiles";
import Ute from "./pages/Ute";

const queryClient = new QueryClient({
  defaulatOptions: { queries: { staleTime: 0 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="index" />} />
            <Route path="index" element={<Index />} />
            <Route path="hot" element={<Hot />} />
            <Route path="new" element={<New />} />
            <Route path="plates" element={<Plates />} />
            <Route path="tiles" element={<Tiles />} />
            <Route path="ute" element={<Ute />} />
          </Route>
          <Route path="success" element={<Success />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
