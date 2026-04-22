import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/55 py-12 backdrop-blur-xl">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <img
              src="/Logoledo.jpg"
              alt="Stride Forward"
              className="h-40 w-auto rounded-2xl"
            />
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Kontaktai</div>
            <div className="mt-5 space-y-4 text-sm text-white/72">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+37064158099" className="transition hover:text-white">
                  +37064158099
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:Strideforwardhd@gmail.com" className="transition hover:text-white">
                  Strideforwardhd@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>Vilnius, Lietuva</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Social media</div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/strideforward_hd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/70 transition hover:border-primary/40 hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <span
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/70"
              >
                <Facebook size={18} />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-white/35">
          © 2026 Stride Forward Hockey Development
        </div>
      </div>
    </footer>
  );
}
