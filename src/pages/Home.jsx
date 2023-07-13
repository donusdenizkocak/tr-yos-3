import Header from "../components/homeComponents/Header";
import CardHomeIntro from "../components/homeComponents/CardHomeIntro";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header />
      <CardHomeIntro />
    </motion.div>
  );
};

export default Home;
