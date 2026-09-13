export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-100 bg-white">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4 md:px-8">

        {/* BRAND */}
        <div className="md:col-span-1">

          <a
            href="#home"
            className="mb-4 flex items-center gap-2"
          >

            <img
              src="./src/assets/logo-text.png"
              alt="Dev Stack Logo"
              className="h-6 w-6 object-contain"
            />

            <span className="text-sm font-bold text-slate-800">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>

          </a>

          <p className="max-w-xs text-[10px] leading-5 text-slate-400">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex gap-4 text-[9px] font-medium text-slate-500">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="#" onClick={(e) => e.preventDefault()}>
              Twitter
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

        </div>

        {/* PRODUCT */}
        <div>

          <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-700">
            Product
          </h3>

          <ul className="space-y-2.5 text-[10px] text-slate-400">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#technologies">Technologies</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

          </ul>

        </div>

        {/* COMPANY */}
        <div>

          <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-700">
            Company
          </h3>

          <ul className="space-y-2.5 text-[10px] text-slate-400">

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href="#contact">Careers</a>
            </li>

          </ul>

        </div>

        {/* LEGAL */}
        <div>

          <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-slate-700">
            Legal
          </h3>

          <ul className="space-y-2.5 text-[10px] text-slate-400">

            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>

            <li>
              <a href="#terms">Terms of Service</a>
            </li>

          </ul>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-slate-100 px-6 py-5 text-[9px] text-slate-400 md:px-8">

        <span>
          © 2026 Dev Stack. All rights reserved.
        </span>

        <div className="flex gap-5">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>

      </div>

    </footer>
  );
};