import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accept');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'reject');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed left-4 bottom-4 z-50 w-full max-w-[420px] rounded-2xl border border-gray-200/14 bg-bg-surface/80 backdrop-blur-lg shadow-card p-3.5"
      role="dialog"
      aria-label="Cookie Banner"
    >
      <div className="flex justify-between items-start gap-2.5 flex-wrap mb-2">
        <div>
          <strong className="text-gray-200/92 block mb-2">Cookies & Datenschutz</strong>
          <p className="text-xs text-gray-200/70 mb-0">
            Wir verwenden Cookies für grundlegende Funktionen und (optional) Statistik/Marketing. Du kannst jederzeit ablehnen.
          </p>
        </div>
      </div>
      <div className="flex gap-2.5 flex-wrap mt-3">
        <button
          onClick={handleReject}
          className="px-3 py-2 text-sm font-semibold rounded-btn bg-gray-200/6 border border-gray-200/14 text-gray-200/90 hover:-translate-y-0.5 transition-all"
          type="button"
        >
          Alles ablehnen
        </button>
        <button
          onClick={handleAccept}
          className="px-3 py-2 text-sm font-semibold rounded-btn bg-gradient-to-b from-accent to-accent-dark text-gray-900 hover:-translate-y-0.5 transition-all"
          type="button"
        >
          Alle akzeptieren
        </button>
      </div>
      <p className="text-xs text-gray-200/70 mt-2">
        Mehr Infos in der{' '}
        <a href="/datenschutz.html" className="underline underline-offset-2">
          Datenschutzerklärung
        </a>
        .
      </p>
    </div>
  );
}
