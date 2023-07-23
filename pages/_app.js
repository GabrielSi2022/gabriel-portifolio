import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import Transition from "../components/Transition";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
