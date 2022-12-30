'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
      />
      <motion.div
        variant={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0 [550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-20 left-40 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute flex justify-center items-center rounded-3xl left-[20%] top-[40%] w-[218px] h-[168px] p-[6px] bg-[rgba(255, 255, 255, 0.08)] shadow-[0px 40px 80px rgba(0, 0, 0, 0.25)] backdrop-blur-[6px] ">
          <img
            src="/upside-join.png"
            alt="people"
            className="w-[196px] h-[150px]"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
