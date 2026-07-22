import React from "react";

const HowToUse = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-semibold">
            Step by Step Guide
          </span>

          <h2 className="lg:text-5xl text-3xl font-black mt-6 text-slate-800">
            How to Use This
            <span className="block text-emerald-600">
              Electricity Bill Calculator
            </span>
          </h2>

          <p className="mt-6 text-slate-500 max-w-3xl mx-auto text-lg">
            Follow these simple steps to calculate your estimated electricity
            bill based on the latest Tamil Nadu tariff rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="relative bg-slate-50 rounded-3xl p-8 shadow-lg border-t-4 border-emerald-500">
            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
              1
            </div>

            <div className="mt-8 text-6xl">📄</div>

            <h3 className="mt-6 text-2xl font-bold">Check Your EB Bill</h3>

            <p className="mt-4 text-slate-500 leading-7">
              Find the total electricity units consumed in your latest Tamil
              Nadu EB bill.
            </p>
          </div>

          <div className="relative bg-slate-50 rounded-3xl p-8 shadow-lg border-t-4 border-yellow-500">
            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
              2
            </div>

            <div className="mt-8 text-6xl">⌨️</div>

            <h3 className="mt-6 text-2xl font-bold">Enter Units</h3>

            <p className="mt-4 text-slate-500 leading-7">
              Type the total units into the calculator input field.
            </p>
          </div>

          <div className="relative bg-slate-50 rounded-3xl p-8 shadow-lg border-t-4 border-orange-500">
            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold">
              3
            </div>

            <div className="mt-8 text-6xl">⚡</div>

            <h3 className="mt-6 text-2xl font-bold">Calculate</h3>

            <p className="mt-4 text-slate-500 leading-7">
              Click the Calculate button to instantly generate your bill.
            </p>
          </div>

          <div className="relative bg-slate-50 rounded-3xl p-8 shadow-lg border-t-4 border-sky-500">
            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold">
              4
            </div>

            <div className="mt-8 text-6xl">💰</div>

            <h3 className="mt-6 text-2xl font-bold">View Result</h3>

            <p className="mt-4 text-slate-500 leading-7">
              Check the slab-wise breakdown and estimated payable amount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
