'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// The Data Cloud beacon records a page view when the page first loads, but moving
// between pages on this site does not reload it, so later pages went unrecorded.
// reinit re-runs the beacon for the new page. Only once the visitor has accepted
// tracking in the consent banner; before that the beacon must stay silent.
export default function DataCloudPageViews() {
  const pathname = usePathname();
  const firstPath = useRef(pathname);

  useEffect(() => {
    if (pathname === firstPath.current) return;
    firstPath.current = '';

    const sdk = window.DataCloudInteractions;
    if (!sdk?.reinit || !sdk.getConsents) return;

    try {
      const optedIn = sdk.getConsents().some((c) => c.status === sdk.ConsentStatus?.OptIn);
      if (optedIn) sdk.reinit();
    } catch (error) {
      console.error('Data Cloud page view failed:', error);
    }
  }, [pathname]);

  return null;
}
