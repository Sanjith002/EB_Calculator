import React from "react";
import { motion } from "framer-motion";

const SavingTips = () => {
  return (
    <section className="bg-linear-to-br from-slate-100 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold">
            Save More Every Month
          </span>

          <h2 className="lg:text-5xl text-3xl font-black mt-6">
            Smart Ways to
            <span className="text-emerald-600 block">
              Reduce Your Electricity Bill
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 items-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-emerald-500 text-white text-6xl py-8 text-center">
              💡
            </div>

            <div className="p-7 flex flex-col">
              <h3 className="font-bold text-2xl">LED Lighting</h3>

              <p className="mt-4 text-slate-500">
                Replace old bulbs with LED lights and reduce lighting costs by
                up to 80%.
              </p>

              <div className="mt-auto pt-6">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="font-semibold text-emerald-700">
                    Save up to ₹1,200/year
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-sky-500 text-white text-6xl py-8 text-center">
              🌀
            </div>

            <div className="p-7 flex flex-col">
              <h3 className="font-bold text-2xl">BLDC Fans</h3>

              <p className="mt-4 text-slate-500">
                BLDC fans consume nearly half the electricity of conventional
                ceiling fans.
              </p>

              <div className="mt-auto pt-6">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="font-semibold text-emerald-700">
                    Save up to ₹1,200/year
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-orange-500 text-white text-6xl py-8 text-center">
              ❄️
            </div>

            <div className="p-7 flex flex-col">
              <h3 className="font-bold text-2xl">5-Star Appliances</h3>

              <p className="mt-4 text-slate-500">
                Upgrade to energy-efficient appliances to lower your monthly
                power consumption.
              </p>

              <div className="mt-auto pt-6">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="font-semibold text-emerald-700">
                    Save up to ₹1,200/year
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-purple-500 text-white text-6xl py-8 text-center">
              🔌
            </div>

            <div className="p-7 flex flex-col">
              <h3 className="font-bold text-2xl">Switch Off Devices</h3>

              <p className="mt-4 text-slate-500">
                Unplug chargers and electronics when not in use to eliminate
                standby power consumption.
              </p>

              <div className="mt-auto pt-6">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="font-semibold text-emerald-700">
                    Save up to ₹1,200/year
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SavingTips;
