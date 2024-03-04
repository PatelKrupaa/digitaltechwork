import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../pages/index.css";
import DashboardPage from "./components/layout/Dashboard";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <DashboardPage />
    </>
  );
}
