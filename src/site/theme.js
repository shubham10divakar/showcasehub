import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const THEMES = [
  { id: 'cosmos', label: 'Tricolour Cosmos' },
  { id: 'lab', label: 'Research Lab' },
  { id: 'arcade', label: 'Arcade' },
];
const KEY = 'sd-theme';
const ids = THEMES.map((t) => t.id);

// First visit: a random theme. After that the visitor keeps the one they saw
// (or picked) so the site does not change its look between pages or visits.
function initialTheme() {
  // ?theme=arcade in the address forces a theme (handy for sharing a look).
  const asked = new URLSearchParams(window.location.search).get('theme');
  if (ids.includes(asked)) return asked;
  try {
    const saved = window.localStorage.getItem(KEY);
    if (ids.includes(saved)) return saved;
  } catch (e) { /* storage blocked: fall through to random */ }
  return ids[Math.floor(Math.random() * ids.length)];
}

const ThemeContext = createContext({ theme: 'cosmos', setTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem(KEY, theme); } catch (e) { /* ignore */ }
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
