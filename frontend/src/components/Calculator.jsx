import React, { useState } from "react";
import { FaCalculator, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Calculator = () => {
  const [units, setUnits] = useState("");
  const [bill, setBill] = useState("₹0.00");
  const [breakdown, setBreakdown] = useState([]);
  const [displayUnits, setDisplayUnits] = useState(0)

  const { mutate: getbill, isPending} = useMutation({
    mutationFn: async ({ units }) => {
      const res = await axios.post("https://eb-calculator.onrender.com/bills/", { units });
      return res.data;
    },
    onSuccess: (data, variables) => {
      setBill(data["Estimated bill"]);
      setBreakdown(data.breakdown);
      setDisplayUnits(Number(variables.units))
      setUnits("")
    },

    onError: (error) => {
      let message = "Something went wrong";

      if (error.response) {
        const data = error.response.data;

        if (typeof data === "string") {
          // Django HTML error page
          message = `Server error: ${error.response.status}`;
        } else if (data.message) {
          message = data.message;
        } else if (data.detail) {
          message = data.detail;
        } else {
          // Django field validation errors
          message = Object.values(data).flat().join(", ");
        }
      } else {
        message = error.message;
      }
      setBill("₹0.00");
      setBreakdown([]);
      setDisplayUnits(0);
      toast.error(message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!units) {
      toast.error("Please enter electricity units");
      return;
    }
    getbill({ units });
  };

  return (
    <section className="-mt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* ================= LEFT ================= */}

          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl shadow-xl border border-emerald-100
                     h-auto lg:h-[850px]
                     flex flex-col
                     overflow-hidden"
            >
              {/* Header */}

              <div className="p-8 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <FaCalculator className="text-3xl text-emerald-700" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">Calculate Your Bill</h2>

                    <p className="text-slate-500">
                      Enter electricity units to estimate your bill.
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}

              <div className="flex-1 flex flex-col justify-between p-8 overflow-y-auto">
                {/* Input */}

                <form onSubmit={handleSubmit}>
                  <label className="block font-semibold mb-3">
                    Units Consumed
                  </label>

                  <input
                    type="number"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                    placeholder="Example : 350"
                    className="w-full rounded-2xl border-2 border-slate-200
                         px-6 py-5 text-lg
                         outline-none
                         focus:border-emerald-500 no-spinner"
                  />

                  <p className="text-sm text-slate-500 mt-3">
                    Enter the total units from your latest electricity bill.
                  </p>

                  {/* Button */}

                  <button
                    disabled={isPending}
                    type="submit"
                    className="w-full mt-8 py-5 rounded-2xl
                         bg-linear-to-r
                         from-emerald-600
                         to-green-500
                         text-white
                         font-bold
                         text-lg
                         hover:shadow-xl
                         transition
                         cursor-pointer
                         disabled:opacity-50
                         disabled:cursor-not-allowed
                         "
                  >
                    {isPending ? "Calculating..." : "Calculate Electricity Bill"}
                  </button>
                </form>

                {/* Features */}

                <div className="flex-1 flex items-center">
                  <div className="w-full pt-8 space-y-4">
                    <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                        ✓
                      </div>

                      <div>
                        <h4 className="font-semibold">Latest Tariff</h4>

                        <p className="text-sm text-slate-500">
                          Updated according to current TNEB rates.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
                      <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                        ⚡
                      </div>

                      <div>
                        <h4 className="font-semibold">Instant Result</h4>

                        <p className="text-sm text-slate-500">
                          Slab-wise calculation within seconds.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                        🔒
                      </div>

                      <div>
                        <h4 className="font-semibold">Privacy Friendly</h4>

                        <p className="text-sm text-slate-500">
                          No electricity data is stored.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                        🚀
                      </div>

                      <div>
                        <h4 className="font-semibold">Fast & Free</h4>

                        <p className="text-sm text-slate-500">
                          Calculate your electricity bill instantly at no cost.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:col-span-3">
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl shadow-xl border border-orange-100
               h-auto lg:h-[850px]
               flex flex-col
               overflow-hidden"
            >
              {/* Header */}

              <div className="p-8 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <FaMoneyBillWave className="text-3xl text-orange-600" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">Bill Summary</h2>

                    <p className="text-slate-500">
                      Estimated Electricity Charges
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}

              <div className="flex-1 flex flex-col p-8 overflow-hidden">
                {/* Bill Card */}

                <div className="bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-8 text-white shadow-lg">
                  <p className="text-lg font-medium">Estimated bill</p>
                  <h2 className="lg:text-6xl text-xl sm:text-5xl  font-black mt-2 break-all">{bill} <span className="text-sm sm:text-md lg:text-xl">for {displayUnits} Units</span></h2>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      Updated Tariff
                    </span>

                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      Slab Wise
                    </span>

                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      Instant Result
                    </span>
                  </div>
                </div>

                {/* Slab Header */}

                <div className="flex items-center justify-between mt-8 mb-6">
                  <h3 className="text-2xl font-bold">Slab Breakdown</h3>

                  {breakdown.length > 0 && (
                    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                      {breakdown.length} Slabs
                    </span>
                  )}
                </div>

                {/* Scroll Area Starts */}

                <div className="flex-1 overflow-y-auto hide-scrollbar pr-2">
                  {breakdown.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full border-2 border-dashed border-orange-200 rounded-3xl bg-orange-50/40 flex flex-col items-center justify-center text-center px-10 py-8">
                        <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                          <FaCalculator className="text-5xl text-orange-500" />
                        </div>

                        <h3 className="text-3xl font-bold text-slate-800 mt-8">
                          Your Bill Summary Will Appear Here
                        </h3>

                        <p className="mt-4 text-slate-500 max-w-lg leading-8">
                          Enter the total electricity units consumed and click
                          <span className="font-semibold text-orange-600">
                            {" "}
                            Calculate Electricity Bill
                          </span>{" "}
                          to get an instant slab-wise electricity bill with a
                          complete slab-wise breakdown.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {breakdown.map((item, index) => (
                        <div
                          key={index}
                          className="bg-slate-50 hover:bg-orange-50 rounded-2xl p-5 border border-slate-200 transition-all"
                        >
                          <div className="flex justify-between items-start gap-6">
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-slate-800">
                                {item.slab}
                              </h4>

                              <p className="text-slate-500 mt-1">
                                {item.units} Units × ₹{item.rate}
                              </p>

                              <p className="text-sm text-slate-400 mt-2">
                                {item.calculation}
                              </p>
                            </div>

                            <div className="text-right shrink-0">
                              <p className="lg:text-2xl text-md font-bold text-orange-600">
                                {item.amount}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
