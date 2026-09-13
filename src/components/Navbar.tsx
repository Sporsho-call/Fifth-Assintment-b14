import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={closeMenu}
        >
          {/*help by ai*/}
          <img
            src="/src/assets/logo-text.png"
            alt="Dev Stack Logo"
            className="h-7 w-7 object-contain"
          />

          <span className="text-base font-bold tracking-tight text-slate-800">
            Dev <span className="brand-gradient-text">Stack</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 text-[12px] font-medium text-slate-500 md:flex">
          <a
            href="#home"
            className="transition-colors hover:text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="transition-colors hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="text-[12px] font-medium text-slate-600 hover:text-pink-500"
          >
            Sign In
          </a>

          <a
            href="#contact"
            className="brand-gradient rounded-full px-5 py-2.5 text-[12px] font-semibold text-white shadow-sm"
          >
            Sign Up
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md border border-slate-200 px-3 py-2 text-xs md:hidden"
          aria-expanded={isOpen}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-3 border-t border-slate-100 pt-4 text-sm md:hidden">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#technologies" onClick={closeMenu}>Technologies</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};