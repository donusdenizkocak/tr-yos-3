import BasicDetail from '../components/detailComponents/BasicDetail'
import DetailHeader from '../components/detailComponents/DetailHeader'
import MainInfo from '../components/detailComponents/MainInfo'
import { motion } from "framer-motion";
const Detail = () => {
  return (

    <motion.div  initial={{opacity:0 }}
    animate={{opacity:1 }}>
      <DetailHeader />
      
      <MainInfo/>
      <BasicDetail/>
    </motion.div>

  )
}

export default Detail