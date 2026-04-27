import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Pagrindinis', href: '/#hero' },
    { label: 'Naudos', href: '/#benefits' },
    { label: 'Stovykla', href: '/#camp-flow' },
    { label: 'Treneriai', href: '/#coaches' },
    { label: 'Kaina', href: '/#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/Logoledo.jpg"
            alt="Stride Forward"
            className="h-11 w-auto"
          />
          <div>
            <div className="font-display text-2xl uppercase leading-none text-white">Stride Forward</div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Hockey development</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-white/62 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="/treniruotesonline"
            className="group relative inline-flex overflow-hidden rounded-full border border-white/30 bg-gradient-to-r from-white/15 via-white/8 to-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/20"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-700 group-hover:left-full" />
            <span className="relative">Treniruotės online</span>
          </a>
          <a
            href="/#registration"
            className="rounded-full border border-primary/30 bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(230,64,47,0.3)] transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Registruotis
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:bg-white/10 xl:hidden"
          aria-label="Atidaryti meniu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl xl:hidden">
          <nav className="container flex flex-col gap-5 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72 transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/treniruotesonline"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-gradient-to-r from-white/15 via-white/8 to-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              Treniruotės online
            </a>
            <a
              href="/#registration"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(230,64,47,0.3)] transition hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Registruotis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
