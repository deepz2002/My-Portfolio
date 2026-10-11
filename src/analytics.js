import posthog from 'posthog-js';

// Public project key — safe to ship in client code. Set in .env.local (dev) or repo variables (GitHub Pages).
const KEY = import.meta.env.VITE_POSTHOG_KEY;
const HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com';

export const analyticsEnabled = Boolean(KEY);

/**
 * Consent model:
 * - before a choice / after "Decline": cookieless tracking — no cookies or storage, visit still counted
 *   (anonymous, hashed server-side by PostHog).
 * - after "Accept": cookies on — returning visitors are recognised, each gets a person profile and
 *   their sessions are recorded.
 */
export function initAnalytics() {
  if (!analyticsEnabled) return;
  posthog.init(KEY, {
    api_host: HOST,
    cookieless_mode: 'on_reject',
    opt_out_capturing_by_default: true, // nothing stored until the visitor accepts
    person_profiles: 'always',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
  });

  // Personal share links: https://…/My-Portfolio/?ref=acme-recruiter tells you exactly who opened it
  const ref = new URLSearchParams(location.search).get('ref');
  if (ref) posthog.register({ ref });
}

export const consentStatus = () => (analyticsEnabled ? posthog.get_explicit_consent_status() : 'denied');

export function setConsent(granted) {
  if (!analyticsEnabled) return;
  if (granted) {
    posthog.opt_in_capturing();
    const ref = posthog.get_property('ref');
    if (ref) posthog.setPersonProperties({ ref });
  } else {
    posthog.opt_out_capturing();
  }
}

export function track(event, props) {
  if (analyticsEnabled) posthog.capture(event, props);
}
