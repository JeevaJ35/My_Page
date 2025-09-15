import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import profile from "../data/profile.json"; // adjust path

const Hero = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], [0, 100]);
  const picY = useTransform(scrollY, [0, 300], [0, 40]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden">
      {/* Background Motion */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple-500/10 dark:from-accent/30 dark:to-purple-500/20"
      />

      {/* Profile Picture */}
      <Reveal>
        <motion.div
          style={{ y: picY }}
          className="relative w-44 h-44 rounded-full p-1 z-10"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-500 to-purple-500 animate-spin-slow"
            style={{ zIndex: -1 }}
          />
          <img
            src="/profile.jpg" // or profile.image if you add it
            alt={profile.name}
            className="w-full h-full rounded-full object-cover border-4 border-white dark:border-background shadow-soft relative"
          />
        </motion.div>
      </Reveal>

      {/* Name */}
      <Reveal delay={0.2}>
        <h1 className="mt-6 text-3xl font-bold dark:text-foreground text-gray-900 z-10 relative">
          {profile.name}
        </h1>
      </Reveal>

      {/* Title */}
      <Reveal delay={0.4}>
        <p className="mt-2 text-lg text-gray-600 dark:text-muted z-10 relative">
          {profile.title}
        </p>
      </Reveal>

      {/* Highlights as badges */}
<Reveal delay={0.6}>
  <div className="mt-4 flex flex-wrap justify-center gap-2 z-10 relative max-w-2xl">
    {profile.highlights.map((point, idx) => (
      <span
        key={idx}
        className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200 text-sm shadow-sm"
      >
        {point}
      </span>
    ))}
  </div>
</Reveal>


      {/* Links as Buttons */}
      <Reveal delay={0.8}>
        <div className="flex gap-4 mt-6 z-10 relative">
          {profile.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:opacity-90 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
