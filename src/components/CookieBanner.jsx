import { useEffect, useState } from 'react';
import { analyticsEnabled, consentStatus, setConsent } from '../analytics';

/** Bottom consent bar. Re-opened from the footer via the `open-cookie-settings` event. */
export default function CookieBanner() {
  const [open, setOpen] = useState(() => analyticsEnabled && consentStatus() === 'pending');

  useEffect(() => {
    const reopen = () => setOpen(true);
    addEventListener('open-cookie-settings', reopen);
    return () => removeEventListener('open-cookie-settings', reopen);
  }, []);

  if (!open) return null;

  const choose = (granted) => {
    setConsent(granted);
    setOpen(false);
  };

  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md">
      <div className="term p-4 sm:p-5" style={{ background: 'rgb(var(--veil) / .95)' }}>
        <p className="font-mono text-sm accent">$ cookies --consent</p>
        <p className="mt-2 text-sm">
          I use cookies to understand how visitors use this site — which sections they read and where they came from.
          Declining keeps you anonymous: no cookies are stored and only an anonymous visit is counted.
        </p>
        <div className="mt-4 flex gap-3">
          <button onClick={() => choose(true)} className="btn solid !px-4 !py-2">Accept</button>
          <button onClick={() => choose(false)} className="btn !px-4 !py-2">Decline</button>
        </div>
      </div>
    </div>
  );
}
