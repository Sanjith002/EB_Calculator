import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-semibold">
          Why Choose Us
        </span>

        <h2 className="lg:text-5xl text-3xl font-black mt-6 text-slate-800">
          Everything You Need to Calculate
          <span className="block text-emerald-600">Your Electricity Bill</span>
        </h2>

        <p className="text-slate-500 mt-6 max-w-3xl mx-auto text-lg">
          Our calculator is built for Tamil Nadu electricity consumers,
          providing accurate slab-wise calculations with the latest tariff rates
          and useful insights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl">
            ⚡
          </div>

          <h3 className="font-bold text-2xl mt-6">Latest Tariff</h3>

          <p className="mt-4 text-slate-500 leading-7">
            Updated according to the latest Tamil Nadu electricity tariff slabs
            for accurate calculations.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl">
            📊
          </div>

          <h3 className="font-bold text-2xl mt-6">Slab Breakdown</h3>

          <p className="mt-4 text-slate-500 leading-7">
            View exactly how each slab contributes to your electricity bill with
            transparent calculations.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
            🚀
          </div>

          <h3 className="font-bold text-2xl mt-6">Instant Results</h3>

          <p className="mt-4 text-slate-500 leading-7">
            No waiting. Enter your units and instantly receive your estimated
            electricity bill.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl">
            📱
          </div>

          <h3 className="font-bold text-2xl mt-6">Mobile Friendly</h3>

          <p className="mt-4 text-slate-500 leading-7">
            Fully responsive design that works perfectly on desktop, tablet, and
            mobile devices.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
            🔒
          </div>

          <h3 className="font-bold text-2xl mt-6">Privacy First</h3>

          <p className="mt-4 text-slate-500 leading-7">
            Your usage data is never stored. Everything is calculated instantly
            and securely.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl">
            💰
          </div>

          <h3 className="font-bold text-2xl mt-6">Free Forever</h3>

          <p className="mt-4 text-slate-500 leading-7">
            Unlimited electricity bill calculations with no hidden charges or
            subscription required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
