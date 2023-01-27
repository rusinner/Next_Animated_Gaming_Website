"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText, InsightCard } from "../components";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about Gamverse" textStyles="text-center" />
        <div className="mt-[30px] flex flex-col gap-[30px] ">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
