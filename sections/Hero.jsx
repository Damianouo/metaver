'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 className={styles.heroHeading} variants={textVariant(1.1)}>
          Metaverse
        </motion.h1>
        <motion.div
          className="flex flex-row justify-center items-center"
          variants={textVariant(1.2)}
        >
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>NESS</h1>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full md:mt-[20px] mt-[12px]"
        variants={slideIn('right', 'tween', 0, 2, 1)}
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-t-[140px] z-0 top-[30px]">
          <img
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 "
            src="/cover.png"
            alt="cover"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
