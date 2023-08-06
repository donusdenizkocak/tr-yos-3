import Header from "../components/homeComponents/Header";
import CardHomeIntro from "../components/homeComponents/CardHomeIntro";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const Home = () => {
  const [slider, setSlider] = useState([]); 
  const getSliders = async () => {
    try {
      const { data } = await axios(
        `https://tr-yös.com/api/v1/record/sliders.php?token=${API_KEY}`
      );
      setSlider(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSliders();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header slider={slider} />
      <CardHomeIntro />
    </motion.div>
  );
};

export default Home;
