'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div className="w-[24px] h-[24px] relative">
        <Image src="/search.svg" alt="search" fill />
      </div>
      <h2 className="font-extrabold  text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
      <div className="w-[24px] h-[24px] relative">
        <Image src="/menu.svg" alt="menu" fill />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
