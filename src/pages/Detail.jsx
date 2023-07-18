import AboutDetail from '../components/detailComponents/AboutDetail';
import BasicDetail from '../components/detailComponents/BasicDetail'
import DetailHeader from '../components/detailComponents/DetailHeader'
import MainInfo from '../components/detailComponents/MainInfo'
import { motion } from "framer-motion";
import { SubmitReview } from '../components/detailComponents/SubmitReview';
const Detail = () => {
  return (

    <motion.div  initial={{opacity:0 }}
    animate={{opacity:1 }}>
      <DetailHeader />
      <MainInfo/>
      <AboutDetail/>
      <BasicDetail/>
      <SubmitReview/>
    </motion.div>

  )
}

export default Detail