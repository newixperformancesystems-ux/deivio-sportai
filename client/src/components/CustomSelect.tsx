import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';

interface CustomSelectProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function CustomSelect({ label, options, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(value ?? '');
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<{ left: number; top: number; width: number } | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const insideButton = containerRef.current?.contains(target);
      const insideDropdown = dropdownRef.current?.contains(target);
      if (!insideButton && !insideDropdown) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const update = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMenuStyle({ left: rect.left, top: rect.bottom + 8, width: rect.width });
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [isOpen]);

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
          ref={buttonRef}
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

        {isOpen && menuStyle && typeof document !== 'undefined' &&
          createPortal(
            <div
              ref={dropdownRef}
              className="fixed rounded-xl border border-white/10 bg-black/90 backdrop-blur-lg shadow-lg z-[9999] overflow-hidden"
              style={{ left: menuStyle.left, top: menuStyle.top, width: menuStyle.width, maxHeight: 300 }}
            >
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
            </div>,
            document.body
          )}
      </div>
    </label>
  );
}
