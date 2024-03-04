import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import DashboardPage from ".";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <DashboardPage />
    </>
  );
}