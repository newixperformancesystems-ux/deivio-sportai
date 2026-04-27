import {
  Smartphone,
  ClipboardCheck,
  LineChart,
  MessageSquare,
  Activity,
  Target,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OnlineRegistrationForm from '@/components/OnlineRegistrationForm';

const backgroundImage = '/hero-hockey.jpg';

const benefits = [
  {
    title: 'Individuali programa',
    text: 'Treniruotės pritaikytos tavo amžiui, lygiui ir tikslams.',
    icon: Target,
  },
  {
    title: 'Aiški struktūra',
    text: 'Kiekviena treniruotė, pratimai, setai ir pakartojimai apie viską žinai iš anksto.',
    icon: ClipboardCheck,
  },
  {
    title: 'Trenerio pastabos',
    text: 'Kiekviename pratime trumpos instrukcijos ir patarimai, kaip atlikti taisyklingai.',
    icon: MessageSquare,
  },
  {
    title: 'Progreso stebėjimas',
    text: 'Suvedi rezultatus po treniruotės — mes matome ir koreguojame krūvį.',
    icon: LineChart,
  },
  {
    title: 'Programėlė telefone',
    text: 'Visa programa po ranka — atidarai, atlieki, fiksuoji.',
    icon: Smartphone,
  },
  {
    title: 'Nuotolinė priežiūra',
    text: 'Reguliarus grįžtamasis ryšys ir atsakymai į klausimus.',
    icon: Activity,
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(230,64,47,0.9)]" />
      {children}
    </div>
  );
}

function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <h2 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-6xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-base leading-7 text-white/70 md:text-lg">{description}</p>
    </div>
  );
}

function AngularCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`surface-card relative overflow-hidden border border-white/10 bg-white/6 p-6 md:p-8 ${className}`}
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
      }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-24 bg-primary" />
      {children}
    </div>
  );
}

export default function TreniruotesOnline() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,2,2,0.82) 0%, rgba(2,2,2,0.9) 30%, rgba(2,2,2,0.94) 100%), url(${backgroundImage})`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,64,47,0.24),transparent_22%),radial-gradient(circle_at_left_center,rgba(255,255,255,0.08),transparent_18%),linear-gradient(135deg,transparent_0%,transparent_62%,rgba(230,64,47,0.14)_62%,rgba(230,64,47,0.14)_66%,transparent_66%)]" />

      <div className="relative z-10">
        <Header />

        <section className="container pb-20 pt-44 md:pt-52">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <SectionEyebrow>Online programa</SectionEyebrow>
              <h1 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-7xl">
                Tavo programa <span className="text-primary">telefone</span>.
                <br />
                Mūsų priežiūra <span className="text-primary">nuotoliu</span>.
                <br />
                Progresas — visą vasarą.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">
                Atletas gauna individualiai paruoštą treniruočių programą programėlėje, kurioje aiškiai
                mato kiekvieną treniruotę, pratimus, setus, pakartojimus ir trenerio pastabas. Atlikęs
                treniruotę, jis suveda rezultatus, o mes nuotoliu stebime progresą, koreguojame krūvį ir
                padedame judėti teisinga kryptimi.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#online-registration"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(230,64,47,0.3)] transition hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Pradėti dabar
                </a>
                <a
                  href="#video"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/15"
                >
                  Žiūrėti video
                </a>
              </div>
            </div>

            <AngularCard className="grid gap-5">
              {benefits.slice(0, 4).map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                    <benefit.icon size={20} />
                  </span>
                  <div>
                    <div className="font-display text-lg uppercase text-white">{benefit.title}</div>
                    <p className="mt-1 text-sm leading-6 text-white/65">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </AngularCard>
          </div>
        </section>

        <section id="video" className="container py-20">
          <SectionTitle
            title="Kaip atrodo programa"
            description="Trumpas pristatymas, kaip atletas naudoja TrainHeroic programėlę treniruočių metu."
          />

          <AngularCard className="overflow-hidden p-0">
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/uploads/online-training.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/hero-hockey.jpg"
                className="h-full w-full object-cover"
              >
                Jūsų naršyklė nepalaiko video atkūrimo.
              </video>
            </div>
          </AngularCard>
        </section>

        <section id="online-registration" className="container py-20">
          <SectionTitle
            title="Registracija"
            description="Užpildyk anketą — susisieksime ir suderinsime startą."
          />

          <OnlineRegistrationForm />
        </section>

        <Footer />
      </div>
    </div>
  );
}
