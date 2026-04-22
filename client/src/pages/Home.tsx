import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Dumbbell,
  Goal,
  Grip,
  IceCreamCone,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Shield,
  Star,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

const backgroundImage = '/hero-hockey.jpg';

const participantBenefits = [
  {
    title: 'Didesnį greitį',
    text: 'Greitesnis pirmas žingsnis, geresnis įsibėgėjimas ir daugiau sprogstamumo.',
    icon: Zap,
  },
  {
    title: 'Daugiau jėgos',
    text: 'Tvirtesnis kūnas, stipresnės dvikovos ir geresnė kūno kontrolė.',
    icon: Dumbbell,
  },
  {
    title: 'Geresnį mobilumą',
    text: 'Laisvesnis judėjimas, geresnė amplitudė ir mažiau apribojimų.',
    icon: MoveRight,
  },
  {
    title: 'Didesnį stabilumą',
    text: 'Tvirtesnės pozicijos, geresnė pusiausvyra ir kontrolė judesyje.',
    icon: Shield,
  },
  {
    title: 'Geresnę ištvermę',
    text: 'Aukštesnis darbo pajėgumas treniruotėse ir rungtynėse.',
    icon: Zap,
  },
  {
    title: 'Aukštesnį atletinį lygį',
    text: 'Greitesnis, stipresnis, judresnis ir geriau pasiruošęs sezonui.',
    icon: Trophy,
  },
];

const campFlow = [
  {
    title: 'Grupės',
    text: 'Formuojame Elito, moterų / merginų ir jaunimo grupes pagal amžių ir fizinio pasirengimo lygį.',
    meta: 'Kiekvienas sportininkas dirba jam tinkamiausioje aplinkoje',
  },
  {
    title: 'Treniruotės',
    text: 'Vyksta 1 kartą per dieną, nuo 2 iki 5 kartų per savaitę, priklausomai nuo pasirengimo lygio.',
    meta: 'Individualūs poreikiai ir sporto lygis nulemia intensyvumą',
  },
  {
    title: 'Laikotarpis',
    text: 'Gegužės 11 d. – rugpjūčio 9 d. Po vasaros darbas gali tęstis ir sezono metu individualia forma.',
    meta: 'Ilgalaikis atletinis pagrindas ir nuolatinis progresavimas',
  },
];

const coaches = [
  {
    name: 'Deividas Rinkevicius',
    role: 'Fizinio rengimo treneris',
    image: '/devis.jpg',
    experience: 'Baigęs Lietuvos sporto universiteto sportinės veiklos analizės magistrą. Dirbdamas su jaunimo krepšinio rinktinėmis, BC "Kibirkštis", Lietuvos vyrų ledo ritulio rinktine ir Elektrėnų "Energija", padeda sportininkams ugdyti greitį, jėgą, galią ir ilgalaikį atletinį pasirengimą.',
    achievements: ['Jaunimo krepšinio rinktinės', 'Lietuvos vyrų ledo ritulio rinktinė', 'Elektrėnų "Energija"'],
  },
  {
    name: 'Ugnius Čižas',
    role: 'Ledo ritulio treneris',
    image: '/cizas.jpg',
    experience: 'LSU treniravimo sistemų bakalauras, daugiau nei 25 metus ant ledo praleidęs sportininkas. 12 metų nacionalinėje Lietuvos rinktinėje, žaidęs 6 Europos šalių klubuose ir iškovojęs 12 pasaulio čempionatų medalių.',
    achievements: ['12 pasaulio čempionatų medaliai', '6 Europos šalių klubai', 'Lietuvos U18, U20 ir vyrų rinktinės'],
  },
];

const testimonials = [
  {
    name: 'Audra V.',
    text: 'Puiki stovykla! Mano sūnus per vasarą padarė neįtikėtinų pokyčių. Treneriai – profesionalai, kurie tikrai rūpinasi žaidėjų tobulėjimu. Rekomenduojame!',
  },
  {
    name: 'Vytautas K.',
    text: 'Svarbu, kad stovykla orientuota ne tik į treniruotes, bet ir į individualius sportininko poreikius. Dukra grįžo namo energinga ir motyvuota. Tikrai verta!',
  },
  {
    name: 'Laima Č.',
    text: 'Didelis pliusas - profesionali aplinka ir kokybiškas vedimas. Sūnus iš tiesų juda į priekį. Jau žinome, kad grįšime ir kitą vasarą!',
  },
];

const galleryItems = [
  { title: 'Treniruočių akimirka', image: '/gallery/1.jpg', objectPosition: 'center' },
  { title: 'Darbas ant ledo', image: '/gallery/2.jpg', objectPosition: 'center' },
  { title: 'Fizinis pasiruošimas', image: '/gallery/3.jpg', objectPosition: 'center' },
  { title: 'Individualus dėmesys', image: '/gallery/4.jpg', objectPosition: 'center' },
  { title: 'Technikos blokas', image: '/gallery/5.jpg', objectPosition: 'top' },
  { title: 'Komandinė atmosfera', image: '/gallery/6.jpg', objectPosition: 'center' },
];

const includedItems = [
  'Treniruotės ant ledo',
  'Fizinio pasiruošimo sesijos',
  'Darbas mažose grupėse',
  'Progresą orientuota metodika',
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
      <h2 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-6xl">
        {title}
      </h2>
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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,2,2,0.82) 0%, rgba(2,2,2,0.9) 30%, rgba(2,2,2,0.94) 100%), url(${backgroundImage})`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,64,47,0.24),transparent_22%),radial-gradient(circle_at_left_center,rgba(255,255,255,0.08),transparent_18%),linear-gradient(135deg,transparent_0%,transparent_62%,rgba(230,64,47,0.14)_62%,rgba(230,64,47,0.14)_66%,transparent_66%)]" />
      <div className="pointer-events-none fixed inset-y-0 left-0 hidden w-[8vw] bg-[linear-gradient(180deg,transparent_0%,rgba(230,64,47,0.85)_26%,rgba(230,64,47,0.85)_74%,transparent_100%)] opacity-80 lg:block [clip-path:polygon(0_0,100%_7%,78%_50%,100%_93%,0_100%)]" />
      <div className="pointer-events-none fixed inset-y-0 right-0 hidden w-[8vw] bg-[linear-gradient(180deg,transparent_0%,rgba(230,64,47,0.85)_26%,rgba(230,64,47,0.85)_74%,transparent_100%)] opacity-80 lg:block [clip-path:polygon(100%_0,0_7%,22%_50%,0_93%,100%_100%)]" />

      <Header />

      <div className="relative z-10">
        <main>
          <section id="hero" className="border-b border-white/10 pt-32 md:pt-40 relative overflow-hidden scroll-mt-[80px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(2,2,2,0.6) 0%, rgba(2,2,2,0.75) 50%, rgba(2,2,2,0.85) 100%), url(${backgroundImage})`,
              }}
            />
            <div className="container pb-16 md:pb-24 relative z-10">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="max-w-[820px]">
                  <SectionEyebrow>Vaikams ir profesionaliems atletams</SectionEyebrow>
                  <h1 className="font-display text-5xl uppercase leading-[0.88] text-white md:text-7xl xl:text-[7.2rem]">
                    Stride Forward – tavo pranašumas ant ledo
                  </h1>

                  <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                    Laviname fizines savybes, kurios svarbiausios šiuolaikiniam ledo ritulininkui. Kiekviena treniruotė orientuota į realų progresą ir perkėlimą į žaidimą.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href="#registration"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_40px_rgba(230,64,47,0.35)] transition hover:-translate-y-0.5 hover:bg-primary/90"
                    >
                      Registruotis
                      <ArrowRight size={18} />
                    </a>
                    <div className="flex flex-wrap gap-3 text-sm text-white/70">
                      {['Aukšto tempo treniruotės', 'Profesionali metodika', 'Limituotas vietų skaičius'].map((item) => (
                        <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 backdrop-blur-sm">
                          <Check size={15} className="text-primary" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <AngularCard className="self-end">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Sezono kryptis</span>
                    <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Off-season
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <div className="text-sm uppercase tracking-[0.18em] text-white/45">Fokusas</div>
                      <div className="mt-3 font-display text-3xl uppercase leading-none text-white">Greitis</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <div className="text-sm uppercase tracking-[0.18em] text-white/45">Fokusas</div>
                      <div className="mt-3 font-display text-3xl uppercase leading-none text-white">Technika</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <div className="text-sm uppercase tracking-[0.18em] text-white/45">Fokusas</div>
                      <div className="mt-3 font-display text-3xl uppercase leading-none text-white">Kontrolė</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <div className="text-sm uppercase tracking-[0.18em] text-white/45">Fokusas</div>
                      <div className="mt-3 font-display text-3xl uppercase leading-none text-white">Jėga</div>
                    </div>
                  </div>
                </AngularCard>
              </div>
            </div>
          </section>

          <section id="problem-solution" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <div className="grid gap-6 lg:grid-cols-2">
                <AngularCard>
                  <div className="flex items-center gap-3 text-white">
                    <Zap className="text-primary" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Problema</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl uppercase text-white">Kodėl progresas stringa</h3>
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        title: 'Trūksta aiškios krypties vasaros pasirengime',
                        desc: 'Daugelis jaunų ledo ritulininkų vasarą sportuoja aktyviai, tačiau be aiškios struktūros, plano ir nuoseklios progresijos.',
                      },
                      {
                        title: 'Per daug bendro fizinio darbo, per mažai specifikos ledo rituliui',
                        desc: 'Ne kiekviena treniruotė kuria tas savybes, kurios tiesiogiai reikalingos ant ledo — greitį, galią, stabilumą ir judėjimo kokybę.',
                      },
                      {
                        title: 'Tarpsezonis dažnai neišnaudojamas maksimaliai',
                        desc: 'Vasara tampa laiku „palaikyti formą", vietoje to, kad ji būtų panaudota realiam fiziniam šuoliui į priekį.',
                      },
                      {
                        title: 'Trūksta profesionalios aplinkos ir kokybiško vedimo',
                        desc: 'Be tinkamos priežiūros, aiškių akcentų ir kokybiško proceso žaidėjams sunku suprasti, ar jie iš tiesų juda į priekį.',
                      },
                      {
                        title: 'Silpnas atletinis pagrindas riboja progresą sezono metu',
                        desc: 'Kai nepakankamai lavinama jėga, sprogstamoji galia, koordinacija ir kūno kontrolė, žaidėjo potencialas ant ledo lieka neišpildytas.',
                      },
                    ].map((problem, idx) => (
                      <div key={idx}>
                        <div className="flex gap-3">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{problem.title}</p>
                            <p className="mt-1 text-sm leading-6 text-white/70">{problem.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AngularCard>

                <AngularCard className="bg-primary/10">
                  <div className="flex items-center gap-3 text-white">
                    <Shield className="text-primary" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Sprendimas</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl uppercase text-white">Kaip mes tai sprendžiame</h3>
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        title: 'Suteikiame aiškią struktūrą ir kryptį',
                        desc: 'Mūsų stovyklose žaidėjai dirba pagal apgalvotą, nuoseklų ir profesionaliai sudėliotą pasirengimo procesą.',
                      },
                      {
                        title: 'Orientuojamės į tai, kas iš tikrųjų svarbu ledo rituliui',
                        desc: 'Laviname greitį, galią, mobilumą, stabilumą, koordinaciją ir judėjimo kokybę taip, kad tai turėtų realų perkėlimą į žaidimą.',
                      },
                      {
                        title: 'Paverčiame vasarą realaus progreso laikotarpiu',
                        desc: 'Siekiame, kad tarpsezonis nebūtų tik aktyvus laikas, o taptų kryptingu atletinio augimo etapu.',
                      },
                      {
                        title: 'Kuriame profesionalią ir aukštus standartus keliančią aplinką',
                        desc: 'Užtikriname kokybišką vedimą, aiškius reikalavimus, dėmesį technikai ir procesą, kuris padeda sportininkui augti užtikrintai.',
                      },
                      {
                        title: 'Statome stiprų ilgalaikį atletinį pagrindą',
                        desc: 'Mūsų tikslas — ne tik trumpalaikis rezultatas stovykloje, bet ir tvirtesnis, greitesnis, stipresnis bei geriau sezonui pasiruošęs žaidėjas.',
                      },
                    ].map((solution, idx) => (
                      <div key={idx}>
                        <div className="flex gap-3">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{solution.title}</p>
                            <p className="mt-1 text-sm leading-6 text-white/70">{solution.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AngularCard>
              </div>
            </div>
          </section>

          <section id="benefits" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <SectionTitle
                title="Ką gaus dalyvis"
                description="Mūsų programa orientuota į realų fizinį progresą. Kiekviena treniruotė skirta ugdyti tas savybes, kurios tiesiogiai reikalingos ant ledo ir rungtynėse."
              />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 [grid-auto-rows:1fr]">
                {participantBenefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <AngularCard key={item.title} className="transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/8">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-primary/14 text-primary">
                          <Icon size={24} />
                        </div>
                        <ChevronRight className="text-white/30" />
                      </div>
                      <h3 className="mt-6 font-display text-3xl uppercase leading-none text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
                    </AngularCard>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="camp-flow" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <SectionTitle
                title="Kaip vyksta stovykla"
                description="Programa struktūrizuota taip, kad kiekvienas sportininkas dirbtų jam tinkamiausioje aplinkoje ir gautų maksimalų progresą."
              />

              <div className="grid gap-5 lg:grid-cols-3">
                {campFlow.map((item, index) => (
                  <AngularCard key={item.title}>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="text-5xl font-display text-white/20">0{index + 1}</div>
                      <Clock3 size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display text-3xl uppercase text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/72">{item.text}</p>
                    <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-7 text-white/72">
                      {item.meta}
                    </div>
                  </AngularCard>
                ))}
              </div>
            </div>
          </section>

          <section id="coaches" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <SectionTitle
                title="Treneriai"
                description="Mūsų komanda susideda iš patyrusių specialistų, kurie turi realią patirtį aukščiausiame lygyje ir žino, kaip padėti sportininkams augti."
              />

              <div className="flex flex-wrap justify-center gap-5">
                {coaches.map((coach) => (
                  <AngularCard key={coach.name + coach.role} className="w-full max-w-sm">
                    <div className="mb-8 aspect-[4/4.3] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30">
                      <div
                        className="h-full w-full bg-cover bg-top"
                        style={{
                          backgroundImage: `url(${coach.image})`,
                        }}
                      />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{coach.role}</div>
                    <h3 className="mt-3 font-display text-4xl uppercase leading-none text-white">{coach.name}</h3>
                    <p className="mt-5 text-sm leading-7 text-white/70">{coach.experience}</p>
                    <div className="mt-6 space-y-3">
                      {coach.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-3 text-sm text-white/75">
                          <Check size={16} className="mt-0.5 text-primary" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </AngularCard>
                ))}
              </div>
            </div>
          </section>

          <section id="results" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <SectionTitle
                title="Rezultatai ir atsiliepimai"
                description=""
              />

              <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
                <AngularCard>
                  <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                    {[
                      { value: '100+', label: 'Dalyvių per sesijas' },
                      { value: '3x', label: 'Aiškios progreso kryptys' },
                      { value: 'Top', label: 'Aukšto lygio aplinka' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                        <div className="font-display text-4xl text-primary">{stat.value}</div>
                        <div className="mt-2 text-sm text-white/60">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </AngularCard>

                <div className="grid gap-5">
                  {testimonials.map((testimonial) => (
                    <AngularCard key={testimonial.name}>
                      <div className="mb-4 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm leading-7 text-white/78">"{testimonial.text}"</p>
                      <div className="mt-4 text-sm font-semibold text-white">{testimonial.name}</div>
                    </AngularCard>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="gallery" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <SectionTitle title="Galerija" description="" />

              <div className="grid gap-4 md:grid-cols-3">
                {galleryItems.map((item) => (
                  <div
                    key={item.title}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/30 transition hover:border-primary/40"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{ objectPosition: item.objectPosition }}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Kadras</div>
                      <div className="mt-1 font-display text-xl text-white">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <SectionTitle
                title="Kaina"
                description="Pasirinkite tinkamą treniruotės grupę ir investuokite į savo atletinį augimą."
              />

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { group: 'U-14', sessions: 2, price: 30, description: 'Jauniausia grupė' },
                  { group: 'U-16', sessions: 3, price: 40, description: 'Vidutinio amžiaus' },
                  { group: 'U-20', sessions: 4, price: 50, description: 'Vyresniųjų jaunimo' },
                  { group: 'Pro', sessions: 5, price: 60, description: 'Profesionali grupė' },
                ].map((tier) => (
                  <AngularCard key={tier.group} className="flex flex-col">
                    <div className="mb-6">
                      <div className="font-display text-3xl uppercase text-white">{tier.group}</div>
                      <p className="mt-2 text-xs text-white/60">{tier.description}</p>
                    </div>
                    <div className="mb-6 flex-1">
                      <div className="text-sm text-white/70">
                        <div className="mb-3">
                          <span className="font-semibold text-white">{tier.sessions} kartai</span> per savaitę
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Kaina per savaitę</div>
                      <div className="mt-3 font-display text-4xl text-primary">€{tier.price}</div>
                    </div>
                  </AngularCard>
                ))}
              </div>


            </div>
          </section>

          <section id="registration" className="py-12 md:py-16 scroll-mt-[80px]">
            <div className="container">
              <SectionTitle
                title="Registracija"
                description="Stride Forward 2026 vasaros registracija. Užpildyk formą ir mes susisiekime su tavimi per 24 valandas."
              />

              <AngularCard>
                <RegistrationForm />
              </AngularCard>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
