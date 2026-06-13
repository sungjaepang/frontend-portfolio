/* 260612 프로젝트 시작 및 파일 생성 */ 
/*  */ 

/* 6단계 Framer Motion 적용 */ 
/*  */ 
/*  */

import { motion } from "framer-motion";

function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;