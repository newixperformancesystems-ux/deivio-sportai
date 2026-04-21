import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface CustomSelectProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function CustomSelect({ label, options, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
        {label}
      </span>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-full rounded-xl border border-white/10 bg-white/8 px-4 text-sm text-white outline-none transition focus:border-primary focus:bg-white/12 flex items-center justify-between cursor-pointer hover:border-white/20"
        >
          <span className={selected ? 'text-white' : 'text-white/40'}>
            {selected || 'Pasirinkite...'}
          </span>
          <ChevronDown
            size={18}
            className={`text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-lg shadow-lg z-50 overflow-hidden" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <div className="max-h-64 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full px-4 py-3 text-left text-sm transition ${
                    selected === option
                      ? 'bg-primary/20 text-primary font-semibold'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </label>
  );
}
