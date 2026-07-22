import React from "react";


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-black">⚡ EB Calculator</h2>

            <p className="mt-6 text-slate-400 leading-8">
              A modern Tamil Nadu Electricity Bill Calculator built to help
              consumers estimate electricity charges quickly and understand
              tariff slabs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li>Calculator</li>

              <li>Saving Tips</li>

              <li>How It Works</li>

              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">Disclaimer</h3>

            <p className="mt-6 text-slate-400 leading-8">
              This calculator provides estimated electricity charges based on
              published tariff slabs. The final bill issued by TNEB may include
              additional charges, taxes, or adjustments.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-500">
          © 2026 Tamil Nadu Electricity Bill Calculator • Built with React &
          Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
