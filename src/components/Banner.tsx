
export const Banner = () => {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 md:flex-row md:px-8 md:py-28"
    >

      
      <div className="flex-1 text-center md:text-left">

        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">

          Build Your Ideal

          <br />

          <span className="hero-gradient-text">
            Development Stack
          </span>

        </h1>

        <p className="mt-6 max-w-xl text-sm leading-6 text-slate-500 md:text-[15px]">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">

          <a
            href="#technologies"
            className="brand-gradient rounded-md px-5 py-3 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="rounded-md border border-slate-200 bg-white px-7 py-3 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
          >
            Learn More
          </a>

        </div>
      </div>

      
      <div className="flex flex-1 justify-center">

        <img
          src="./src/assets/banner-stack.png"
          alt="Development stack illustration"
          className="h-auto w-full max-w-md object-contain"
        />

      </div>

    </section>
  );
};