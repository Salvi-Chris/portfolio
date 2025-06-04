"use client";

import React from "react";
import { motion } from "framer-motion";
import UserProfile from "./UserProfile";


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

const IntroSection = () => {
  return (
    <div>
      <UserProfile />
      <motion.section
        className="mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.h1
          className="lg:text-4xl text-2xl font-bold mb-4 lg:text-left text-center"
          variants={fadeIn}
          custom={0}
        >
          🦋 Salvation Chigereoka
        </motion.h1>
        <motion.h1
          className="lg:text-xl text-lg font-semibold mb-4 lg:text-left text-center"
          variants={fadeIn}
          custom={0}
        >
          Product Manager | Operations Manager | Executive Administrator |
          Writer and Community Builder
        </motion.h1>
        <motion.p
          variants={fadeIn}
          custom={1}
          className="lg:text-left text-center"
        >
          I help startups turn ideas into scalable products, streamline
          operations, and build sustainable systems for growth. From MVP to
          market fit — I bridge execution with impact.
        </motion.p>

        <motion.div className="mt-10" variants={fadeIn} custom={2}>
          <h2 className="font-bold text-3xl">🧑 About me</h2>
          <motion.p variants={fadeIn} custom={1} className="mt-4">
            I’m Salvation Chigereoka, a Product and Operations specialist with
            3+ years of hands-on experience helping startups launch and grow
            digital products in fintech, SaaS, edtech, and Web3. I thrive at the
            intersection of product thinking, execution, and strategic
            operations, transforming ideas into user-validated, revenue-focused
            platforms.
          </motion.p>
          <motion.p variants={fadeIn} custom={1} className="mt-4">
            As the Business Operations Manager at Eachblock, I’ve led product
            delivery for over 5 startups, managing cross-functional teams,
            building MVPs, running user interviews, and shaping go-to-market
            strategies. My approach combines lean product management with an eye
            for systems that scale.
          </motion.p>
          <motion.p variants={fadeIn} custom={1} className="mt-4">
            Beyond shipping products, I’ve also worn hats as a community
            builder, executive assistant to Web3 CEOs, and content writer,
            building communities, managing internal operations, and driving
            thought leadership. I’m passionate about simplifying user journeys,
            clarifying team processes, and making tech more human-centered.
          </motion.p>
        </motion.div>

        {/* <motion.div className="mt-8" variants={fadeIn} custom={2}>
        <h2 className="font-bold text-xl">My Stack</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack?.map((stack, i) => (
            <motion.span
              key={i}
              className="text-sm border rounded-lg px-2 py-1"
              variants={fadeIn}
              custom={i + 3}
            >
              {stack.name}
            </motion.span>
          ))}
        </div>
      </motion.div> */}

        {/* <motion.div
        className="mt-8 text-zinc-600"
        variants={fadeIn}
        custom={techStack.length + 3}
      >
        <h2 className="font-medium text-md text-zinc-400">
          Currently Learning Web3 technologies including
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {learnStack?.map((stack, i) => (
            <motion.span
              className="text-sm border border-zinc-600 rounded-lg px-2 py-1"
              key={i}
              variants={fadeIn}
              custom={techStack.length + 4 + i}
            >
              {stack.name}
            </motion.span>
          ))}
        </div>
      </motion.div> */}
      </motion.section>
    </div>
  );
};

export default IntroSection;
