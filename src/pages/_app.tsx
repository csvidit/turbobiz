import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer";
import Nav from "@/components/nav/Nav";

export default function App({ Component, pageProps, router }: AppProps) {
  // return <Component {...pageProps} />

  return (
    <MainContainer>
      <Nav/>
      <Component {...pageProps} key={router.asPath} />
      <Footer/>
    </MainContainer>
  );
}
