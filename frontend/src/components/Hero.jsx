import React from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-emerald-700 via-green-600 to-lime-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-white">
              <FaBolt />
              Updated Tariff 2026
            </span>

            <h1 className="mt-7 text-5xl lg:text-6xl font-black leading-tight text-white">
              Tamil Nadu
              <span className="block text-yellow-300">Electricity Bill</span>
              Calculator
            </h1>

            <p className="mt-7 text-lg text-green-100 max-w-xl leading-8">
              Instantly calculate your Tamil Nadu Electricity Board bill using
              the latest tariff slabs. Get detailed slab-wise calculations,
              estimated charges and useful electricity saving tips.
            </p>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-white/15 backdrop-blur-xl flex items-center justify-center shadow-2xl mx-auto">
  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-white flex flex-col justify-center items-center">
                <MdElectricBolt className="text-yellow-500 text-8xl" />

                <h2 className="text-2xl font-bold mt-6 text-slate-800">
                  Smart Bill
                </h2>

                <p className="text-slate-500 mt-2 lg:block hidden">Slab Wise Calculation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
