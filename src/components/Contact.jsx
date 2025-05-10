import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5"
      id="contact"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl text-center"
      >
        Contact <span className="font-extrabold">Me</span>
      </motion.h2>

      <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4">
            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="mailto:Youremail@gmail.com"
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-1">
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              haroldcuenca01@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="tele:+639215725691"
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]">
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +639215725691
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
