import { useState, type FormEvent } from 'react';
import CustomSelect from '@/components/CustomSelect';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [trainingGroup, setTrainingGroup] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          birthDate,
          email,
          phone,
          position,
          trainingGroup,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Nepavyko išsiųsti registracijos. Pabandykite dar kartą.');
        return;
      }

      setStatus('success');
      setFullName('');
      setBirthDate('');
      setEmail('');
      setPhone('');
      setPosition('');
      setTrainingGroup('');
    } catch {
      setStatus('error');
      setErrorMessage('Ryšio klaida. Pabandykite dar kartą.');
    }
  };

  const inputClass =
    'h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-primary';

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Vardas, Pavardė
          </span>
          <input
            type="text"
            required
            placeholder="Vardas, Pavardė"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Gimimo data
          </span>
          <input
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Tėvų / įstaigos el. paštas
          </span>
          <input
            type="email"
            required
            placeholder="El. paštas"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Telefonas
          </span>
          <input
            type="tel"
            required
            placeholder="+370"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <CustomSelect
          label="Pozicija"
          options={['Puolėjas', 'Gynėjas', 'Vartininkas']}
          value={position}
          onChange={setPosition}
        />
        <CustomSelect
          label="Treniruotės grupė"
          options={[
            'U-14 2 kartai 30€ per sav.',
            'U-16 3 kartai 40€ per sav.',
            'U-20 4 kartai 50€ per sav.',
            'Pro 5 kartai 60€ per sav.',
          ]}
          value={trainingGroup}
          onChange={setTrainingGroup}
        />
      </div>

      <p className="text-xs text-white/50 text-center sm:text-left">
        Po registracijos susisieksime per 24 valandas ir patikslinsime visas detales.
      </p>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-primary/90 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Siunčiama...' : 'Registruotis'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-emerald-400">
          Registracija sėkmingai išsiųsta! Susisieksime per 24 valandas.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
