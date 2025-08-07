import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm" dir="rtl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="نبراس التقنية" className="h-8 w-auto" />
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center text-sm md:text-base">
            <a href="#features" className="hover:text-primary transition-colors">المميزات</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">كيف يعمل؟</a>
            <a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

