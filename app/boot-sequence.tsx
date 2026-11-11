"use client";

import { useEffect, useState } from "react";

const startupLines = [
  "initializing darkz143 terminal...",
  "mounting public release index",
  "checking external mirror route",
  "vault interface ready",
];

export default function BootSequence() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => setFinished(true), reducedMotion ? 400 : 2500);
    return () => window.clearTimeout(timeout);
  }, []);

  if (finished) return null;

  return (
    <div className="boot-screen" role="status" aria-label="Starting DarkZ143 release vault">
      <div className="boot-grid" aria-hidden="true" />
      <div className="boot-content">
        <div className="boot-brand"><span className="boot-mark">DZ</span><span>DARKZ143 <i>//</i> BOOT</span></div>
        <div className="boot-window">
          <div className="boot-window-bar"><span>ROOT SHELL / SESSION 0x0A</span><span>SECURE STARTUP</span></div>
          <div className="boot-lines" aria-hidden="true">
            {startupLines.map((line, index) => <p key={line} style={{ animationDelay: `${index * 420}ms` }}><span className="boot-ok">[ OK ]</span> {line}</p>)}
          </div>
          <div className="boot-progress-row"><span>LOADING REPOSITORY</span><span className="boot-percent">100%</span></div>
          <div className="boot-progress"><i /></div>
        </div>
        <div className="boot-bottom"><span>INITIALIZING PUBLIC RELEASE INDEX</span><button type="button" onClick={() => setFinished(true)}>SKIP INTRO <span>↗</span></button></div>
      </div>
    </div>
  );
}
