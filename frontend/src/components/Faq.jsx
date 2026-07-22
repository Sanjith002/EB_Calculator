import React from "react";

const Faq = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <span className="bg-orange-100 text-orange-700 px-5 py-2 rounded-full font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="lg:text-5xl text-3xl font-black mt-6">Common Questions</h2>
        </div>

        <div className="mt-16 space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="font-bold text-xl">Is this calculator free?</h3>

            <p className="mt-3 text-slate-600">
              Yes. You can calculate unlimited electricity bills without any
              cost.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="font-bold text-xl">
              Which tariff does this calculator use?
            </h3>

            <p className="mt-3 text-slate-600">
              It uses the latest Tamil Nadu domestic electricity tariff slabs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="font-bold text-xl">
              Does this store my electricity data?
            </h3>

            <p className="mt-3 text-slate-600">
              No. Your units are used only for the calculation and are not
              stored.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="font-bold text-xl">Can I use this on mobile?</h3>

            <p className="mt-3 text-slate-600">
              Yes. The calculator is fully responsive and works on phones,
              tablets and desktops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
