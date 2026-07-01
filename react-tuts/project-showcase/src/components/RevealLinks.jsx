import React from "react";
import { motion } from "motion/react";

export const RevealLinks = () => {

  const fonts = {
    fontColor: "red",
    fontWeight: "black",
    textTransform: "uppercase",
  }

  return (
    <section className="grid place-content-center gap-2 px-8 py-24 text-black">
      {/* // <section className="grid min-h-screen place-content-center gap-2 bg-green-300 px-8 py-24 text-black"> */}
      {/* // <section className="grid min-h-screen place-content-center gap-2 bg-green-300 px-8 text-black"> */}
      <FlipLink href="https://www.github.com/lkhanna1505" target="_blank" style={fonts}>
        GitHub
      </FlipLink>
      <FlipLink href="https://www.x.com/lkhanna1505" target="_blank" style={fonts}>
        Twitter
      </FlipLink>
      <FlipLink href="https://www.linkedin.com/in/lkhanna1505" target="_blank" style={fonts}>
        Linkedin
      </FlipLink>
      <FlipLink href="https://www.leetcode.com/in/lkhanna1505" target="_blank" style={fonts}>
        LeetCode
      </FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};