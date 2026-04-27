import { useState, type FormEvent } from 'react';
import CustomSelect from '@/components/CustomSelect';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function OnlineRegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [frequency, setFrequency] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/register-online', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          birthYear,
          frequency,
          email,
          phone,
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
      setFirstName('');
      setLastName('');
      setBirthYear('');
      setFrequency('');
      setEmail('');
      setPhone('');
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
            Vardas
          </span>
          <input
            type="text"
            required
            placeholder="Vardas"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Pavardė
          </span>
          <input
            type="text"
            required
            placeholder="Pavardė"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Gimimo metai
          </span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{4}"
            required
            maxLength={4}
            placeholder="pvz. 2008"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value.replace(/\D/g, ''))}
            className={inputClass}
          />
        </label>
        <CustomSelect
          label="Treniruočių dažnumas (per savaitę)"
          options={['2 kartai', '3 kartai', '4 kartai', '5 kartai']}
          value={frequency}
          onChange={setFrequency}
        />
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            El. paštas
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
      {status === 'error' && <p className="text-sm text-red-400">{errorMessage}</p>}
    </form>
  );
}
