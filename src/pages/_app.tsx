import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { store } from "redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps, router }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Provider>
  );
}
